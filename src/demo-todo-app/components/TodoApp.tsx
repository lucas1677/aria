import * as React from 'react';

import TodoForm from '@src/demo-todo-app/components/TodoForm';
import TodoList from '@src/demo-todo-app/components/TodoList';
import * as RoutesActions from '../../actions/routes';
import * as logo from '../../resource/image/logo.svg';

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
                <div>
                    <TodoForm/>
                    <TodoList todos={this.props.todos}/>
                </div>
            </div>
        );
    }
}
