const initialState = {
  email: '',
  isLoading: false,
  logged: false,
  error: false,
  errormsg: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_LOADING':
      return {
        ...state,
        isLoading: true,
        errormsg: ''
      };
    case 'LOGIN_OK':
      return {
        ...state,
        email: action.payload[0].mail,
        isLoading: false,
        logged: true
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: true,
        errormsg: 'Wrong Mail or Password. Please check your credentials again!'
      };
    case 'LOGOUT':
      return {
        ...state,
        email: '',
        isLoading: false,
        logged: false
      };
    default:
      return state;
  }
}

export default reducer;
