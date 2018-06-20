import {createTodo, getTodos} from '@src/demo-todo-app/lib/todoServices';
import {showMessage} from '@src/demo-todo-app/reducers/message';
import {TodoState} from '@src/types/todoApp';

const initState: TodoState = {
  todos: [],
  currentTodo: '',
};

export const TODO_ADD = 'TODO_ADD';
export const TODOS_LOAD = 'TODOS_LOAD';
export const CURRENT_UPDATE = 'CURRENT_UPDATE';

export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload: val});
export const loadTodos = (todos) => ({type: TODOS_LOAD, payload: todos});
export const addTodo = (todo) => ({type: TODO_ADD, payload: todo});

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(showMessage('Loading todos...'));
    getTodos()
      .then(
        todos => dispatch(loadTodos(todos))
      );
  };
};

export const saveTodo = (name) => {
  return (dispatch) => {
    dispatch(showMessage('Saving todo...'));
    createTodo(name)
      .then(
        todo => dispatch(addTodo(todo))
      );
  };
};

export default (state: TodoState = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {...state, currentTodo: '', todos: state.todos.concat(action.payload)};
    case TODOS_LOAD:
      return {...state, todos: action.payload};
    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload};
    default:
      return state;
  }
};
