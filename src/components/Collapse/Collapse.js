import React, {Component} from 'react'
import propTypes from 'prop-types'
import reactCSS from 'reactcss';

class Collapse extends Component {

    static defaultProps = {};

    static propTypes = {
        children: propTypes.node,
    };


    render() {
        const {children} = this.props;
        return (
            <div>{children}</div>
        )
    }
}


class Panel extends Component {

    state = {
        height: 0,
        opacity: 0,
    };

    static defaultProps = {};

    static propTypes = {
        children: propTypes.node,
        header: propTypes.string
    };

    handleClick() {
        if (this.state.opacity===1){
            this.setState({
                height: 0,
                opacity: 0,
            });
            return
        }
        this.setState({
            height: '40px',
            opacity: 1,
        })
    }

    render() {

        const styles = reactCSS({
            'default': {
                h5: {
                    backgroundColor: '#ccc',
                    padding: 0,
                    margin: 0,
                    cursor: 'pointer',
                },
                text: {
                    padding: 0,
                    margin: 0,
                    lineHeight: '40px',
                    color: '#777',
                    ...this.state,
                    transition: 'all 0.2s ease',
                },
                border: {
                    border: '1px solid #444'
                }
            },
        });

        const {children, header} = this.props;
        return (
            <div style={styles.border}><h5
                    style={styles.h5}
                    onClick={() => this.handleClick()}
                >{header}</h5>{this.state.opacity===1?<p style={styles.text}>{children.props.children}</p>:<p style={styles.text}></p>}
            </div>
        )
    }
}


Collapse.Panel = Panel;

export default Collapse;