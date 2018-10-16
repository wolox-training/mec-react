import { createStore } from 'redux';

import reducer from './gameReducer/reducer';

const store = createStore(reducer);

export default store;
