import * as React from 'react';
import {connect} from 'react-redux';

import {showMessage} from '@src/app/reducers/message';
import {saveTodo, updateCurrent} from '@src/app/reducers/todo';
import {AppState} from '@src/types/todoApp';

type TodoFormProps = {
  currentTodo: string;
  updateValue: any;
  saveTodo: any;
  showMessage: (msg: string) => any;
};

class TodoForm extends React.Component<TodoFormProps> {
  render() {
    const {currentTodo, updateValue} = this.props;
    const handleInputChange = (evt) => {
      const val = evt.target.value;
      updateValue(val);
    };
    const handleSubmit = (evt) => {
      evt.preventDefault();
      this.props.showMessage('Saving Todo...');
      this.props.saveTodo(currentTodo);
    };
    return (
      <form onSubmit={handleSubmit}>
        <input type="text"
               onChange={handleInputChange}
               value={currentTodo}
        />
      </form>
    );
  }
}

export default connect(
  (state: AppState) => ({
    currentTodo: state.todo.currentTodo,
  }),
  {
    updateValue: updateCurrent,
    saveTodo,
    showMessage,
  }
)(TodoForm);
