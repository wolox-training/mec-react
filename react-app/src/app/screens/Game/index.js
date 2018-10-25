import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import gameAction from '../../../redux/gameReducer/actions';

import Board from './components/Board/';

const Game = ({ history, current, winner, handleClick, jumpTo, xIsNext }) => {
  const moves = history.map(step => {
    const desc = step.id ? `Go to move # ${step.id}` : 'Go to game start';
    return (
      <li key={step.id}>
        <button onClick={() => jumpTo(step.id)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <Fragment>
      <div className="flex-container">
        <div className="game">
          <div className="game-board">
            <Board squares={current.squares} onClick={handleClick} />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Game.propTypes = {
  obj: PropTypes.shape({
    square: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.number
  }),
  // history: PropTypes.arrayOf(PropTypes.Object).isRequired,
  xIsNext: PropTypes.bool.isRequired,
  // current: PropTypes.Object,
  winner: PropTypes.string,
  handleClick: PropTypes.func,
  jumpTo: PropTypes.func
};

const mapStateToProps = state => ({
  history: state.game.history,
  current: state.game.history[state.game.stepNumber],
  winner: state.game.winner,
  stepNumber: state.game.stepNumber,
  xIsNext: state.game.xIsNext
});

const mapDispatchToProps = dispatch => ({
  handleClick: i => dispatch(gameAction.newPlay(i)),
  jumpTo: step => dispatch(gameAction.jumpTo(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
