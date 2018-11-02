import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import loginReducer from './loginReducer/reducers';
import gameReducer from './gameReducer/reducers';

const reducers = {
  login: loginReducer,
  game: gameReducer,
  form: formReducer,
  routing: routerReducer
};

export const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers(reducers);
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk, fetchMiddleware)));

export default store;
