import {TodoAppState} from '@src/types/todoApp';

const initState: TodoAppState = {
    todos: [
        {id: 1, name: 'Render static UI', isComplete: true},
        {id: 2, name: 'Create initial state', isComplete: true},
        {id: 3, name: 'Render based on state', isComplete: true},
    ],
};

export default (state: TodoAppState = initState, action) => {
    switch (action.type) {
        case 'TODO_ADD':
            return {...state, todos: state.todos.concat(action.payload)};
        default:
            return state;
    }
};
