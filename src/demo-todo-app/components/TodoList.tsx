import * as React from 'react';
import {connect} from 'react-redux';

const TodoItem = ({id, isComplete, name}) => (
    <li>
        <input type="checkbox" defaultChecked={isComplete}/>
        {name}
    </li>
);

const TodoList = (props) => (
    <div className="Todo-list">
        <ul>
            {props.todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
        </ul>
    </div>
);

const mapS2P = (state) => ({
    todos: state.todos,
});

export default connect(mapS2P)(TodoList);
