export type AppState = {
  todo: TodoState;
  message: string;
};

export type TodoState = {
  todos: TodoItemState[];
  currentTodo: string;
};

export type TodoItemState = {
  id: number;
  name: string;
  isComplete: boolean;
};
