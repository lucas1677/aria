import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import messageReducer from '@src/demo-todo-app/reducers/message';
import todoReducer from '@src/demo-todo-app/reducers/todo';

const reducer = combineReducers({
  todo: todoReducer,
  message: messageReducer,
});

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
