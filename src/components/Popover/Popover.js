import React, {Component} from 'react';
import propTypes from 'prop-types';
import reactCSS,{hover} from 'reactcss';
import Card from './PopoverCard'


 class Popover extends Component {

    state = {};

    static propTypes = {

    };

    static defaultProps = {
        children: propTypes.node,

    };

    render() {

        const {children, } = this.props;

        let styles = reactCSS({
            'default': {
                style: {
                    position: 'relative',
                    display: 'inline-block',
                    card:{
                        display: 'none'
                    }
                },
                triangle : {
                    position: 'absolute',
                    width: '0',
                    height: '0',
                    border: '5px solid',
                    borderColor: '#fff transparent transparent transparent',
                    bottom: '0',
                    left: '50%',
                    marginLeft: '-5px',
                    marginBottom: '-10px',

                }
            },
            'hover': {
                style: {
                    display: 'inline-block',
                    card:{
                        display: 'inline-block',
                        boxShadow: '0 1px 6px 1px rgba(0,0,0,0.3)',
                        position: 'absolute',
                        top: '0',
                        left: '50%',
                        padding: '8px',
                        marginTop: '-2.7em',
                        transform: 'translate(-50%)',

                    }
                }
            },
        },this.props);

        return (
            <div style={styles.style}>
                {children}<div  style={styles.style.card} >1232124121 <span style={styles.triangle}></span></div>

            </div>
        )
    }
}

export default hover(Popover);