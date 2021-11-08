import React from 'react';
import Square from './Square';
import '../css/Board.css';
import Person from './Person';

class Board extends React.Component {
    renderSquare(i){
        return <Square value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i) }
        />
    }
    
    createSquares() {
        let rows = [];
        for(var i = 0; i < 3; i++){
          let squares = [];
          for(var j = 0; j < 3; j++){
            squares.push(this.renderSquare(3*i+j));
          }
          rows.push(<div className="board-row">{squares}</div>);
        }
        return rows;
    }
    render() {
        return (
            <div>
                <Person name = "trung" />
                {this.createSquares()}                
            </div>
        )
    }
}

export default Board;
