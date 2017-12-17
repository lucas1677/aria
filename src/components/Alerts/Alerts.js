import React, {Component} from 'react';
import propTypes from 'prop-types';
import reactCSS from 'reactcss';


export default class Alerts extends Component {

    state = {
        opacity: 1,
        padding: '0.75rem 1.25rem',
        border: '1px solid transparent',
        marginBottom: '1rem',
        lineHeight: 1.5,
        close: 0,
    };

    static propTypes = {
        message: propTypes.string,
        style: propTypes.object,
        bgColor: propTypes.string,
    };

    static defaultProps = {};

    handleClick=()=> {
        this.setState({opacity: 0, marginBottom: '0rem',padding: '0 0',lineHeight: 0,border: '0px solid transparent',});
    }


    handleEnd = () => {
        this.state.close++;
        if (this.state.close > 2){
            this.setState({close: true});
            this.handleEnd = null;
        }
    };

    render() {

        const {message, style, bgColor, closable, ...props} = this.props;
        let close = closable ? (
            <span style={{float: 'right', lineHeight: 1.5, cursor: 'pointer'}}
                  onClick={this.handleClick}>x</span>
        ) : '';

        let bgc = {

            primary: {
                color: '#004085',
                backgroundColor: '#cce5ff',
                borderColor: '#b8daff',
            },
            secondary: {
                color: '#464a4e',
                backgroundColor: '#e7e8ea',
                borderColor: '#dddfe2',
            },
            success: {
                color: '#155724',
                backgroundColor: '#d4edda',
                borderColor: '#c3e6cb',
            },
            danger: {
                color: '#721c24',
                backgroundColor: '#f8d7da',
                borderColor: '#f5c6cb',
            },
            warning: {
                color: '#856404',
                backgroundColor: '#fff3cd',
                borderColor: '#ffeeba',
            },
            info: {
                color: '#0c5460',
                backgroundColor: '#d1ecf1',
                borderColor: '#bee5eb',
            },
            light: {
                color: '#818182',
                backgroundColor: '#fefefe',
                borderColor: '#fdfdfe',
            },
            dark: {
                color: '#1b1e21',
                backgroundColor: '#d6d8d9',
                borderColor: '#c6c8ca',
            },
        };

        let styles = {
            display: 'block',
            borderRadius: '.25rem',
            padding: '0.75rem 1.25rem',
            border: '1px solid transparent',
            marginBottom: '1rem',
            ...style,
            ...bgc[bgColor],
            ...this.state,
            transformOrigin: '50% 0%',
            transition: 'all .8s cubic-bezier(0.6, 0.18, 0.53, 0.31),opacity .3s ease',

        };

        return (
            this.state.close? null :
                <div
                    style={styles}
                    onTransitionEnd={this.handleEnd}
                >
                    {message}{close}
                </div>
        )
    }
}