import React, {Component} from 'react';
import propTypes from 'prop-types';
import reactCSS from 'reactcss';


export default class Well extends Component {

    static propTypes = {
        children: propTypes.node,
    };

    static defaultProps = {};

    render() {

        const {children} = this.props;

        let styles = {
            display: 'inline-block',
            boxShadow: 'inset 0 0 3px 1px rgba(0,0,0,0.5)',
            padding: '.35em .75em',
            lineHeight: 1.5,
            verticalAlign: 'baseline',
            whiteSpace: 'nowrap',
            borderRadius: '.15em'
        };
        return (
            <div style={styles} >
                {children}
            </div>
        )
    }
}