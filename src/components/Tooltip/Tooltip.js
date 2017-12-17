import React, {Component} from 'react';
import propTypes from 'prop-types';
import reactCSS , {hover} from 'reactcss';

class Tooltip extends Component {

    static defaultProps = {};

    static propTypes = {
        direction: propTypes.string,
        text: propTypes.string,
        children: propTypes.node
    };

    render() {
        const styles = reactCSS({
            'default': {
                section:{
                    position: 'relative',
                    textAlign: 'center',
                    display: 'inline-block',
                    deStyle: {
                        display: 'none',
                    },
                },
                triangle : {
                    position: 'absolute',
                    width: '0',
                    height: '0',
                    border: '5px solid',
                    borderColor: '#666 transparent transparent transparent',
                    bottom: '0',
                    left: '50%',
                    marginLeft: '-5px',
                    marginBottom: '-10px',
                }
            },
            'hover':{
                section:{
                    deStyle: {
                        display: 'inline-block',
                        backgroundColor: '#666',
                        textAlign: 'center',
                        fontSize: '10px',
                        color: '#fff',
                        position: 'absolute',
                        top: '0',
                        left: '50%',
                        padding: '8px',
                        borderRadius: '4px',
                        marginTop: '-3em',
                        // transformOrigin: '50% 51px 0',
                        transform: 'translate(-50%)',
                        ...this.state
                    },
                } ,

            }
        }, this.props, this.state);

        const {direction, children, text} = this.props;
        // switch (direction) {
        //     case 'topLeft':
        //
        //         break;
        //     case 'top':
        //
        //         break;
        //     case 'topRight':
        //
        //         break;
        //     case 'leftTop':
        //
        //         break;
        //     case 'left':
        //
        //         break;
        //     case 'leftBottom':
        //
        //         break;
        //     case 'rightTop':
        //
        //         break;
        //     case 'right':
        //
        //         break;
        //     case 'rightBottom':
        //
        //         break;
        //     case 'bottomLeft':
        //
        //         break;
        //     case 'bottom':
        //
        //         break;
        //     case 'bottomRight':
        //
        //         break;
        //     default:
        //
        //         break;
        // }

        return (
            <section style={styles.section}  >
                {children}
                <span style={styles.section.deStyle}>{text}1121221211<span style={styles.triangle}></span></span>
            </section>
        )
    }

}

export default hover(Tooltip)

