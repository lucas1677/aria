import React, {Component} from 'react';
import propTypes from 'prop-types';
import reactCSS from 'reactcss';

export default class Modal extends Component {

    static propTypes = {
        children: propTypes.node,
        visible: propTypes.bool,
    };

    static defaultProps = {};

    render() {

        const {
            visible,
            children,
            onOk,
            onCancel
        } = this.props;


        let styles = reactCSS({
            'default': {
                bg: {
                    position: 'fixed',
                    backgroundColor: 'rgba(55,55,55,.6)',
                    overflow: 'auto',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1000,
                    display: visible ? 'block' : 'none'
                },
                container: {
                    backgroundColor: '#fff',
                    width: '520px',
                    margin: '150px auto',
                    boxShadow: '0 2px 8px rgba(0,0,0,.3)',
                },
                header: {
                    padding: '17px',
                    borderBottom: '1px solid #ccc',
                },
                body: {
                    padding: '17px',

                },
                footer: {
                    padding: '17px',
                    borderTop: '1px solid #ccc',
                    textAlign: 'right'
                },
            },
        });

        return (

            <div onClick={onCancel}>
                <div style={styles.bg}>
                    <div style={styles.container} onClick={(e)=>e.stopPropagation()} >
                        <div style={styles.header}><h3 style={{padding: 0, margin: 0}}>header<span
                            style={{float: 'right', lineHeight: '20px', display: 'inline-block',cursor:'pointer'}} onClick={onCancel} >x</span></h3></div>
                        <div style={styles.body}>{children}</div>
                        <div style={styles.footer}>
                            <button onClick={onCancel}>cancel</button>
                            <button onClick={onOk}>Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}