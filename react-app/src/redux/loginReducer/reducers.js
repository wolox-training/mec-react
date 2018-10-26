const initialState = {
  email: '',
  password: '',
  name: '',
  surname: '',
  description: '',
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
        error: true
      };
    case 'LOG_OUT':
      return {
        ...state,
        email: '',
        password: '',
        name: '',
        surname: '',
        description: '',
        logged: false
      };
    default:
      return state;
  }
}

export default reducer;
