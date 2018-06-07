import * as React from 'react';
import {connect} from 'react-redux';

import {updateCurrent} from '@src/demo-todo-app/reducers/todo';
import {TodoAppState} from '@src/types/todoApp';

const TodoForm = (props) => {
  const {currentTodo, updateValue} = props;
  const handleInputChange = (evt) => {
    const val = evt.target.value;
    updateValue(val);
  };
  return (
    <form>
      <input type="text"
             onChange={handleInputChange}
             value={currentTodo}
      />
    </form>
  );
};

export default connect((state: TodoAppState) => ({
  currentTodo: state.currentTodo,
}), {
  updateValue: updateCurrent,
})(TodoForm);
