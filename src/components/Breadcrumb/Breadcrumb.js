import React, {Component} from 'react';
import propTypes from 'prop-types';
import reactCSS from 'reactcss';


export default class Breadcrumb extends Component {

    state = {
        hidden : true,
    };

    static propTypes = {
        message: propTypes.string,
        style: propTypes.object,
        bgColor: propTypes.string,
        zIndex: propTypes.string,
    };

    static defaultProps = {};

    render () {

        const styles = reactCSS({
            'default': {
                container: {
                    backgroundColor: '#00f'
                },
            },
            'hidden': {
                container: {
                    backgroundColor: '#0ff'
                }
            },
            'zIndex-2': {
                container: {
                    backgroundColor: '#ff0'
                }
            },
            'hover': {
                container: {
                    backgroundColor: '#f0f'
                }
            },
        },this.props,this.state)

        return(
            <nav >
                <ol>

                </ol>
            </nav>
        )
    }

}