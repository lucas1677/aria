export type TodoAppState = {
    todos: TodoItemState[];
    currentTodo: string;
};

export type TodoItemState = {
    id: number;
    name: string;
    isComplete: boolean;
};
