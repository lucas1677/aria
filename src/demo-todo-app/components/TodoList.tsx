import * as React from 'react';
import {connect} from 'react-redux';

import {TodoItemState} from '@src/types/todoApp';

const TodoItem = ({id, isComplete, name}) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete}/>
    {name}
  </li>
);

type PropsType = {
  todos: TodoItemState[];
};

class TodoList extends React.Component<PropsType> {
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

const mapS2P = (state) => ({
  todos: state.todos,
});

export default connect(mapS2P)(TodoList);
