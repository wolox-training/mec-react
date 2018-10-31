const initialState = {
  email: '',
  isLoading: false,
  logged: false,
  error: false,
  name: '',
  surname: '',
  description: '',
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
        name: action.payload[0].name,
        surname: action.payload[0].surname,
        description: action.payload[0].description,
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
    case 'LOG_OUT':
      return {
        ...state,
        email: '',
        name: '',
        surname: '',
        description: '',
        isLoading: false,
        logged: false
      };
    default:
      return state;
  }
}

export default reducer;
