import React, {Component} from 'react';
import propTypes from 'prop-types';
import reactCSS from 'reactcss';

class Input extends Component {

    state = {
        value: this.props.defaultValue
    };

    static propTypes = {
        before: propTypes.string,
        after: propTypes.string
    };
    static defaultProps = {};

    onChangeHandler = (e)=>{
        this.setState({value: e.target.value});
    };

    render (){

        const {before, after,...prop} =this.props;
        if (before&&!after) {
            return (
                <div>
                    <span>{before}</span>
                    <input {...prop} defaultValue={this.props.defaultValue} onChange={this.onChangeHandler} />
                </div>

            )
        }
        if (after&&!before) {
            return (
                <div>
                    <input {...prop} defaultValue={this.props.defaultValue} onChange={this.onChangeHandler} />
                    <span>{after}</span>
                </div>
            )
        }
        if (after&&before) {
            return (
                <div>
                    <span>{before}</span>
                    <input {...prop} defaultValue={this.props.defaultValue} onChange={this.onChangeHandler} />
                    <span>{after}</span>
                </div>
            )
        }
        return (
            <input {...prop} value={this.state.defaultValue} onChange={this.onChangeHandler} />
        )
    }
}

export default Input