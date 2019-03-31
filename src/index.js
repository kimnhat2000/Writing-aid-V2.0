import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './MainApp';
import * as serviceWorker from './serviceWorker';

import storeConfigure from './store'

import {Provider} from 'react-redux';
import 'semantic-ui-css/semantic.min.css'
import './globalCss.css'

const store = storeConfigure();

const app = (
  <Provider store={store}>
    <MainApp/>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
// store.subscribe(() => console.log(store.getState().responseFormReducer))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
