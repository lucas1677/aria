export type TodoAppState = {
    todos: TodoItemState[];
};

export type TodoItemState = {
    id: number;
    name: string;
    isComplete: boolean;
};
