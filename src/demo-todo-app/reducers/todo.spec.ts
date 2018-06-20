import reducer from '@src/demo-todo-app/reducers/todo';
import {TodoAppState} from '@src/types/todoApp';

describe('Todo Reducer', () => {
  test('returns a state object', () => {
    const result = reducer(undefined, {type: 'ANYTHING'});
    expect(result).toBeDefined();
  });

  test('adds a todo', () => {
    const startState: TodoAppState = {
      todos: [
        {id: 1, name: 'Create Static UI', isComplete: true},
        {id: 2, name: 'Create Initial State', isComplete: false},
        {id: 3, name: 'Use state to render UI', isComplete: false},
      ],
      currentTodo: null,
    };
    const expectedState: TodoAppState = {
      todos: [
        {id: 1, name: 'Create Static UI', isComplete: true},
        {id: 2, name: 'Create Initial State', isComplete: false},
        {id: 3, name: 'Use state to render UI', isComplete: false},
        {id: 4, name: 'Added todo', isComplete: false},
      ],
      currentTodo: null,
    };
    const action = {
      type: 'TODO_ADD',
      payload: {id: 4, name: 'Added todo', isComplete: false},
    };
    const result = reducer(startState, action);
    expect(result).toEqual(expectedState);
  });
});
