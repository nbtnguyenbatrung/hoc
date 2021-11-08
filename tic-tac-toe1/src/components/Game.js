import React, { Component } from 'react'
import Board from './Board';
import Win from './Winner';
import '../css/Game.css';
import location  from './location ';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Next: true,
            stepNumber: 0,
            i : null,
            history: [
                { squares: Array(9).fill(null),
                    pos : '' }
            ]
        }
    }
    jumpTo(step){
        this.setState({
            stepNumber: step,
            Next: (step%2) === 0
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
        const pos = location(i);
        this.setState({
            
            history: history.concat({
                squares: squares,
                pos: pos
            }),
            Next: !this.state.Next,
            stepNumber: history.length,
            i : i 
        });
        console.log(history);
    }


    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = Win(current.squares);
        const kt = current.kt ;
        
        const moves = history.map((step, move) => {
            const desc = move ? step.pos : 'Start the Game';
            return (
                <li key={move}>
                    <button className = { kt ? "indam" : "" } onClick={() => { this.jumpTo(move) }}>
                        {desc}
                    </button>
                </li>
            )
        });
        let status;
        if (winner) {
            status = 'Winner is ' + winner;
        } else {
            status = 'Next Player is ' + (this.state.Next ? 'X' : 'O');
        }


        return (
            <div className="game">
                <div className="game-board">
                    <Board onClick={(i) => this.handleClick(i)}
                        squares={current.squares} />
                </div>
                <div className="game__infor">
                    
                    <div>{status}</div>
                    <button className="game__infor--button " > toogle button  </button>
                    <ol>{moves}</ol>
                </div>

            </div>
        )
    }
}


export default Game;