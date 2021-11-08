import '../css/Square.css';
import React from 'react';


class Square extends React.Component {
    render(){
        return (
            <button className={this.props.pos ? "square_inline" : "square"} onClick={this.props.onClick}>
                {this.props.value}
            </button>
        )
    }
}

export default Square;
