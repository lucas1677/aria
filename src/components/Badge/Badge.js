import React, {Component} from 'react';
import propTypes from 'prop-types';
import reactCSS from 'reactcss';


export default class Badge extends Component {

    state = {};

    static propTypes = {
        children: propTypes.node,
        bgColor: propTypes.string,
    };

    static defaultProps = {};

    render() {

        const {children, bgColor} = this.props;

        let bgc = {
            primary: {
                color: '#fff',
                backgroundColor: '#007bff',
            },
            secondary: {
                color: '#fff',
                backgroundColor: '#868e96',
            },
            success: {
                color: '#fff',
                backgroundColor: '#28a745',
            },
            danger: {
                color: '#fff',
                backgroundColor: '#dc3545',
            },
            warning: {
                color: '#111',
                backgroundColor: '#ffc107',
            },
            info: {
                color: '#fff',
                backgroundColor: '#17a2b8',
            },
            light: {
                color: '#111',
                backgroundColor: '#f8f9fa',
            },
            dark: {
                color: '#fff',
                backgroundColor: '#343a40',
            },
        };
        let styles = reactCSS({
            'default': {
                main: {
                    display: 'inline-block',
                    backgroundColor: '',
                    color: '',
                    fontSize: '75%',
                    padding: '.25em .4em',
                    lineHeight: 1,
                    fontWeight: 700,
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    verticalAlign: 'baseline',
                    borderRadius: '.25em',
                    ...bgc[bgColor],
                }
            }
        });

        return (
            <span style={styles.main}>
                {children}
            </span>
        )
    }
}