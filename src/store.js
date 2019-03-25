import { combineReducers, createStore } from 'redux'

import {responsesReducer} from './Redux/responsesReducer'

export default () => {
  const reducers = combineReducers({
    responsesReducer
  })
  const store = createStore(reducers);
  return store;
};
