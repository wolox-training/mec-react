// decouple reducers from the operations that they do over the state as effects
function onLoading(selector = () => true) {
  return (state, action) => ({
    ...state,
    [`${action.target}Loading`]: selector(action, state)
    // [`${action.target}Errormsg`]: ''
  });
}
function onSuccess(selector = action => action.payload) {
  return (state, action) => ({
    ...state,
    // logged: true,
    [`${action.target}Loading`]: false,
    [action.target]: selector(action, state)
  });
}

function onFailure(selector = () => true) {
  return (state, action) => ({
    ...state,
    [`${action.target}Loading`]: false,
    [`${action.target}Error`]: selector(action, state)
    // [`${action.target}Errormsg`]: 'Wrong Mail or Password. Please check your credentials again!'
  });
}

function onLogOut() {
  return state => ({
    ...state,
    user: null
    // logged: selector(action, state)
  });
}
// instead of export each effects function create an object and export it
const createEffects = {
  onLoading: onLoading(),
  onSuccess: onSuccess(),
  onFailure: onFailure(),
  onLogOut: onLogOut()
};

export default createEffects;
