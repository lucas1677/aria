import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import * as RoutesActions from '@src/actions/routes';

import Footer from '@src/app/components/Footer';
import Message from '@src/app/components/Message';
import TodoForm from '@src/app/components/TodoForm';
import TodoList from '@src/app/components/TodoList';

import * as logo from '@src/resource/image/logo.svg';

type Props = {
  title?: string;
  targetAddress?: string;
  pushToTarget?: void;
  actions?: typeof RoutesActions;
  currentTodo?: string;
  updateCurrent?: (val: any) => void;
};

class TodoApp extends React.Component<Props> {

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
        <Router>
          <div className="Todo-App">
            <Message/>
            <TodoForm/>
            <Route path="/:filter?" component={TodoList}/>
            <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}

export default TodoApp;
