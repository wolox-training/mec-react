import React, { Component } from 'react';
import { connect } from 'react-redux';

import gameAction from '../../../redux/gameReducer/actions';

import Board from './components/Board/';
import { calculateWinner } from './util';

class Game extends Component {
  handleClick = i => this.props.dispatch(gameAction.newPlay(i));

  jumpTo = step => this.props.dispatch(gameAction.jumpTo(step));

  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map(step => {
      const desc = step.id ? `Go to move # ${step.id}` : 'Go to game start';
      return (
        <li key={step.id}>
          <button onClick={() => this.jumpTo(step.id)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  history: state.history,
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext
});

export default connect(mapStateToProps)(Game);
