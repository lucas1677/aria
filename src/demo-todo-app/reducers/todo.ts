import {TodoAppState} from '@src/types/todoApp';

const initState: TodoAppState = {
    todos: [],
};

export default (state: TodoAppState = initState, action) => {
    switch (action.type) {
        case 'TODO_ADD':
            return {...state, todos: state.todos.concat(action.payload)};
        default:
            return state;
    }
};
