import * as React from 'react';
import {connect} from 'react-redux';

import {saveTodo, updateCurrent} from '@src/demo-todo-app/reducers/todo';
import {TodoAppState} from '@src/types/todoApp';

type TodoFormProps = {
  currentTodo: string;
  updateValue: any;
  saveTodo: any;
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
  (state: TodoAppState) => ({
    currentTodo: state.currentTodo,
  }),
  {
    updateValue: updateCurrent,
    saveTodo,
  }
)(TodoForm);
