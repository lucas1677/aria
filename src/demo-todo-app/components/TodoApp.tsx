import * as React from 'react';

import * as RoutesActions from '@src/actions/routes';
import {updateCurrent} from '@src/demo-todo-app/reducers/todo';
import {bindActionCreators} from 'redux';

import TodoForm from '@src/demo-todo-app/components/TodoForm';
import TodoList from '@src/demo-todo-app/components/TodoList';

import * as logo from '@src/resource/image/logo.svg';
import {connect} from 'react-redux';

type Props = {
    title?: string;
    targetAddress?: string;
    pushToTarget?: void;
    actions?: typeof RoutesActions;
    todos?: TodoItem[];
    currentTodo?: string;
    updateCurrent?: (val: any) => void;
};

type TodoItem = {
    id: number;
    name: string;
    isComplete: boolean;
};

type State = {
    activeRoutePath: string;
};

class TodoApp extends React.Component<Props, State> {

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
                    <TodoForm
                        currentTodo={this.props.currentTodo}
                        changeCurrent={this.props.updateCurrent}
                    />
                    <TodoList todos={this.props.todos}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) =>
    bindActionCreators({updateCurrent}, dispatch);
const ConnectedTodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);
export default ConnectedTodoApp;
