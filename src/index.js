import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots});
const store = 
  createStore(rootReducer, applyMiddleware(thunkMiddleWare, logger));

const renderComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(renderComponent, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
