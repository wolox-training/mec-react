const gameAction = {
  newPlay: i => ({ type: 'NEW_PLAY', payload: { pos: i } }),
  jumpTo: step => ({ type: 'JUMP_TO', payload: { stepNum: step } })
};

export default gameAction;
