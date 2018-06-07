import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {updateCurrent} from '@src/demo-todo-app/reducers/todo';

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

const mapS2P = (state) => ({
    currentTodo: state.currentTodo,
});
const mapD2P = (dispatch) => bindActionCreators({
    updateValue: updateCurrent,
}, dispatch);
export default connect(mapS2P, mapD2P)(TodoForm);
