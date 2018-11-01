import { actions } from './actions';

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

// create an object which has the actions and the state changes.
const reducerDescription = {
  [actions.LOGIN_LOADING]: (state, action) => ({
    ...state,
    isLoading: true,
    errormsg: ''
  }),
  [actions.LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    email: action.payload[0].mail,
    name: action.payload[0].name,
    surname: action.payload[0].surname,
    description: action.payload[0].description,
    isLoading: false,
    logged: true
  }),
  [actions.LOGIN_FAILURE]: (state, action) => ({
    ...state,
    isLoading: false,
    error: true,
    errormsg: 'Wrong Mail or Password. Please check your credentials again!'
  }),
  [actions.LOG_OUT]: (state, action) => ({
    ...state,
    email: '',
    name: '',
    surname: '',
    description: '',
    isLoading: false,
    logged: false
  })
};

// and then create the reducer function and put the initialState and reducerObject as the parameters
function createReducer(defaultState, reducerObject) {
  return (state = defaultState, action) => {
    (reducerObject[action.type] && reducerObject[action.type](state, action)) || state;
  };
}

export default createReducer(initialState, reducerDescription);
