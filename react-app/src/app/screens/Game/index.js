import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import { gamePropTypes } from '../../../constants/proptypes';
import gameAction from '../../../redux/gameReducer/actions';

import Board from './components/Board/';

const Game = ({ history, current, winner, handleClick, jumpTo, xIsNext, logged }) => {
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

  return !logged ? (
    <Redirect to="/" />
  ) : (
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
  history: PropTypes.arrayOf(gamePropTypes).isRequired,
  xIsNext: PropTypes.bool.isRequired,
  current: gamePropTypes,
  winner: PropTypes.string,
  handleClick: PropTypes.func,
  jumpTo: PropTypes.func
};

const mapStateToProps = state => ({
  history: state.game.history,
  current: state.game.history[state.game.stepNumber],
  winner: state.game.winner,
  stepNumber: state.game.stepNumber,
  xIsNext: state.game.xIsNext,
  logged: state.login.logged
});

const mapDispatchToProps = dispatch => ({
  handleClick: i => dispatch(gameAction.newPlay(i)),
  jumpTo: step => dispatch(gameAction.jumpTo(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
