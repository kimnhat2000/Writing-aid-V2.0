import { combineReducers, createStore } from 'redux'

import {mainMenuDropdown} from './Redux/dropdownReducer'
import {responsesReducer} from './Redux/responsesReducer'

export default () => {
  const reducers = combineReducers({
    mainMenuDropdown,
    responsesReducer
  })
  const store = createStore(reducers);
  return store;
};
