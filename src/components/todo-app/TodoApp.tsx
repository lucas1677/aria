import * as RoutesActions from '@src/actions/routes';
import * as logo from '@src/resource/image/logo.svg';
import * as React from 'react';
import {style} from 'typestyle';

const componentBaseStyle = style({
    marginTop: '20px',
    textAlign: 'left',
});

type Props = {
    title?: string;
    targetAddress?: string;
    pushToTarget?: void;
    actions?: typeof RoutesActions;
    todos: TodoItem[];
};

type TodoItem = {
    id: number;
    name: string;
    isComplete: boolean;
};

type State = {
    activeRoutePath: string;
};

export default class TodoApp extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React with redux</h1>
                </header>
                <div className={componentBaseStyle}>
                    <form>
                        <input type="text"/>
                    </form>
                    <div className="Todo-list">
                        <ul>
                            {this.props.todos.map(todo => (
                                <li key={todo.id}>
                                    <input type="checkbox" defaultChecked={todo.isComplete}/> {todo.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
