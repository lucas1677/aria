import {createTodo, getTodos, updateTodo} from '@src/demo-todo-app/lib/todoServices';
import {showMessage} from '@src/demo-todo-app/reducers/message';
import {TodoState} from '@src/types/todoApp';

const initState: TodoState = {
  todos: [],
  currentTodo: '',
};

export const TODO_ADD = 'TODO_ADD';
export const TODOS_LOAD = 'TODOS_LOAD';
export const TODO_REPLACE = 'TODO_REPLACE';
export const CURRENT_UPDATE = 'CURRENT_UPDATE';

export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload: val});
export const loadTodos = (todos) => ({type: TODOS_LOAD, payload: todos});
export const addTodo = (todo) => ({type: TODO_ADD, payload: todo});
export const replaceTodo = (todo) => ({type: TODO_REPLACE, payload: todo});

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

export const toggleTodo = (id) => {
  return (dispatch, getState) => {
    dispatch(showMessage('Saving todo update'));
    const {todos} = getState().todo;
    const todo = todos.find(t => t.id === id);
    const toggledTodo = {...todo, isComplete: !todo.isComplete};
    updateTodo(toggledTodo)
      .then(res => dispatch(replaceTodo(res)));
  };
};

export default (state: TodoState = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {...state, currentTodo: '', todos: state.todos.concat(action.payload)};
    case TODOS_LOAD:
      return {...state, todos: action.payload};
    case TODO_REPLACE:
      return {
        ...state,
        todos: state.todos.map(
          t => t.id === action.payload.id ? action.payload : t
        ),
      };
    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload};
    default:
      return state;
  }
};
