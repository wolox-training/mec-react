import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Square from './components/Square';

class Board extends Component {
  renderSquare = i => <Square num={i} value={this.props.squares[i]} onClick={this.props.onClick} />;

  render() {
    return (
      <React.Fragment>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </React.Fragment>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Board;
