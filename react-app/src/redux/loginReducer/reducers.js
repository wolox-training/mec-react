const initialState = {
  email: '',
  password: '',
  isLoading: false,
  logged: false,
  error: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_LOADING':
      return {
        ...state,
        isLoading: true
      };
    case 'LOGIN_OK':
      return {
        ...state,
        logged: true
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        error: true
      };
    case 'LOGOUT':
      return {
        ...state,
        logged: false
      };
    default:
      return state;
  }
}

export default reducer;
