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
        email: action.payload[0].mail,
        password: action.payload[0].password,
        isLoading: false,
        logged: true
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: true
      };
    case 'LOG_OUT':
      return {
        ...state,
        email: '',
        password: '',
        logged: false
      };
    default:
      return state;
  }
}

export default reducer;
