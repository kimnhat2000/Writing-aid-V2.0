import { combineReducers, createStore } from 'redux'

import {mainMenuDropdown} from './Redux/dropdownReducer'
import {responsesReducer} from './Redux/responsesReducer'
import {responseFormReducer} from './Redux/responseFormReducer'

export default () => {

  const reducers = combineReducers({
    mainMenuDropdown,
    responsesReducer,
    responseFormReducer,
  })

  const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );
  return store;
};
