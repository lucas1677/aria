import {routerMiddleware} from 'react-router-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import messageReducer from '@src/demo-todo-app/reducers/message';
import todoReducer from '@src/demo-todo-app/reducers/todo';
import {createBrowserHistory} from 'history';

const reducer = combineReducers({
  todo: todoReducer,
  message: messageReducer,
});

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      routerMiddleware(createBrowserHistory())
    )
  )
);
