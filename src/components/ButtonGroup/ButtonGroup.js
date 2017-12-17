import React, {Component} from 'react';
import propTypes from 'prop-types';
import reactCSS from 'reactcss';
import Button from '../Button';


export default class ButtonGroup extends Component {

    state = {
        hidden: true,
    };

    static propTypes = {
        message: propTypes.string,
        style: propTypes.object,
        bgColor: propTypes.string,
        zIndex: propTypes.string,
    };

    static defaultProps = {};

    render() {

        return (
            <div>
                <Button>
                </Button>
                <Button>

                </Button>
            </div>
        )
    }
}