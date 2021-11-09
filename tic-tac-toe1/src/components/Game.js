import React, { Component } from 'react'
import Board from './Board';
import Win from './Winner';
import '../css/Game.css';
import Location from './location ';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Next: true,
            stepNumber: 0,
            history: [
                { squares: Array(9).fill(null),
                    loc : '' }
            ],
            check : true
        }
    }
    jumpTo(step){
        this.setState({
            stepNumber: step,
            Next: (step%2) === 0
        })
    }

    toogle(){
        this.setState({
            check: !this.state.check
        })
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = Win(squares);
        if (winner || squares[i]) {
            return;
        }
        squares[i] = this.state.Next ? 'X' : 'O';
        const loc = Location(i);
        this.setState({
            
            history: history.concat({
                squares: squares,
                loc: loc
            }),
            Next: !this.state.Next,
            stepNumber: history.length 
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = Win(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ? step.loc : 'Start the Game';
            return (
                <li key={move}>
                    <button className = { move===history.length-1 ? "text__bold" : "" } onClick={() => { this.jumpTo(move) }}>
                        {desc}
                    </button>
                </li>
            )
        });

        if(!check){
            moves.reverse();
        }
        
        let status;
        let pos__winner;
        if (winner) {
            status = 'Winner is ' + winner.winner;
            pos__winner = winner.pos;
        } else {
            if(history.length === 10){
                status = ' X OR O hòa ' ;
            }else{
                status = 'Next Player is ' + (this.state.Next ? 'X' : 'O');
            }
            
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board onClick={(i) => this.handleClick(i)}
                        squares={current.squares}
                        pos__winner={pos__winner}/>
                </div>
                <div className="game__infor">
                    
                    <div>{status}</div>
                    <button className="game__infor--button " onClick={()=>this.toogle()}  > toogle button  </button>
                    <ol>{moves}</ol>
                </div>

            </div>
        )
    }
}


export default Game;