import React, {Component} from 'react';
import propTypes from 'prop-types';
import reactCSS from 'reactcss';
import Menu from '../Menu'

export default class Dropdown extends Component {

    state = {
        display: 'none',
    };

    static propTypes = {
        children: propTypes.node,
        style: propTypes.object,
        menu: propTypes.object
    };

    handleMouseOver() {
        this.setState({display: 'block',})
    }

    handleMouseOut() {
        this.setState({display: 'none',})
    }

    render() {
        const {
            children,
            style,
            overlay
        } = this.props;

        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">11st menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">22nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">33d menu item</a>
                </Menu.Item>
            </Menu>
        );

        let show = {
            display: this.state.display, position: 'absolute'
        };

        const mouseOver = () => {
            this.handleMouseOver()
        };

        const mouseOut = () => {
            this.handleMouseOut()
        };
        return (
            <div style={{display: 'inline-block'}} onMouseOver={mouseOver}
                 onMouseOut={mouseOut}>
                {children}
                <div style={show}>
                    {menu}
                </div>
            </div>
        )
    };
}