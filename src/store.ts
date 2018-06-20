import reducer from '@src/demo-todo-app/reducers/todo';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
