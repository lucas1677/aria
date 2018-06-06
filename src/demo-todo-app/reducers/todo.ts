import {TodoAppState} from '@src/types/todoApp';

const initState: TodoAppState = {
    todos: [],
};

export default (state: TodoAppState = initState, action) => {
    return state;
};
