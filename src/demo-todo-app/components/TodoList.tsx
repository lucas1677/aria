import * as React from 'react';
import {connect} from 'react-redux';

import {deleteTodo, fetchTodos, getVisibleTodos, toggleTodo} from '@src/demo-todo-app/reducers/todo';
import {AppState, TodoItemState} from '@src/types/todoApp';

const TodoItem = ({id, isComplete, name, toggleTodoHandler, deleteTodoHandler}) => (
  <li>
    <span className="delete-item">
      <button onClick={() => deleteTodoHandler(id)}>X</button>
    </span>
    <input type="checkbox" checked={isComplete}
           onChange={() => toggleTodoHandler(id)}
    />
    {name}
  </li>
);

type PropsType = {
  todos: TodoItemState[];
  filter: string;
  fetchTodos: () => any;
  toggleTodoHandler: any;
  deleteTodoHandler: any;
};

class TodoList extends React.Component<PropsType> {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className="Todo-list">
        <ul>
          {this.props.todos
            .map(todo =>
              <TodoItem
                key={todo.id} {...todo}
                toggleTodoHandler={this.props.toggleTodoHandler}
                deleteTodoHandler={this.props.deleteTodoHandler}
              />)
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  (state: AppState) => ({
    filter: state.todo.filter,
    todos: getVisibleTodos(
      state.todo.todos,
      state.todo.filter
    ),
  }),
  {
    fetchTodos: fetchTodos,
    toggleTodoHandler: toggleTodo,
    deleteTodoHandler: deleteTodo,
  }
)(TodoList);
