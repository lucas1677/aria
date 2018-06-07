import reducer from '@src/demo-todo-app/reducers/todo';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

export default createStore(
  reducer,
  applyMiddleware(thunk)
);
