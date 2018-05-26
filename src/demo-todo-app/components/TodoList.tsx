import * as React from 'react';

const TodoItem = ({id, isComplete, name}) => (
    <li>
        <input type="checkbox" defaultChecked={isComplete}/>
        {name}
    </li>
);

export default (props) => (
    <div className="Todo-list">
        <ul>
            {props.todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
        </ul>
    </div>
);
