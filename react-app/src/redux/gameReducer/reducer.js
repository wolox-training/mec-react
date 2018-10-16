import { calculateWinner } from '../../app/screens/Game/util';

const initialState = {
  history: [
    {
      squares: Array(9).fill(null),
      id: 0
    }
  ],
  stepNumber: 0,
  xIsNext: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'NEW_PLAY': {
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[action.payload.pos]) {
        return;
      }
      squares[action.payload.pos] = state.xIsNext ? 'X' : 'O';
      return {
        history: history.concat([
          {
            id: history.length,
            squares
          }
        ]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext
      };
    }
    case 'JUMP_TO':
      return {
        ...state,
        stepNumber: action.payload.stepNum,
        xIsNext: action.payload.stepNum % 2 === 0
      };
    default:
      return state;
  }
}

export default reducer;
