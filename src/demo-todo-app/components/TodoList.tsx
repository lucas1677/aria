import * as React from 'react';
import {connect} from 'react-redux';

import {fetchTodos} from '@src/demo-todo-app/reducers/todo';
import {AppState, TodoItemState} from '@src/types/todoApp';

const TodoItem = ({id, isComplete, name}) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete}/>
    {name}
  </li>
);

type PropsType = {
  todos: TodoItemState[];
  fetchTodos: () => any;
};

class TodoList extends React.Component<PropsType> {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className="Todo-list">
        <ul>
          {this.props.todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state: AppState) => ({todos: state.todo.todos}),
  {fetchTodos: fetchTodos}
)(TodoList);
