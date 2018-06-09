import {getTodos} from '@src/demo-todo-app/lib/todoServices';
import {TodoAppState} from '@src/types/todoApp';

const initState: TodoAppState = {
  todos: [],
  currentTodo: '',
};

const TODO_ADD = 'TODO_ADD';
const TODOS_LOAD = 'TODOS_LOAD';
const CURRENT_UPDATE = 'CURRENT_UPDATE';

export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload: val});
export const loadTodos = (todos) => ({type: TODOS_LOAD, payload: todos});
export const fetchTodos = () => {
  return () => {
    getTodos()
      .then(
        todos => loadTodos(todos)
      );
  };
};

export default (state: TodoAppState = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {...state, todos: state.todos.concat(action.payload)};
    case TODOS_LOAD:
      return {...state, ...action.payload};
    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload};
    default:
      return state;
  }
};
