import * as React from 'react';
import {style} from "typestyle";
import {Link} from "react-router-dom";
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const componentBaseStyle = style({
    height: '40px',
    backgroundColor: '#171C23',
});

const topLinkDefaultStyle = style({
    display: 'inline-block',
    height: '40px',
    lineHeight: '40px',
    padding: '0 10px',
    color: "#FFF",
    backgroundColor: '#171C23',
    borderRight: '2px solid #000',
    textDecoration: 'none'
});

const Links = () => (
    <nav>
        <Link to="/">LOGO</Link>
        <Link to="/teach-app">teach-app</Link>
    </nav>
);

type AppProps = {}

type AppStates = {}

export default class TopNavBar extends React.Component<AppProps, AppStates> {
    constructor(props) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className={componentBaseStyle}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                >
                    <Menu.Item key="mail">
                        <Icon type="mail" />Navigation One
                    </Menu.Item>
                    <Menu.Item key="app" disabled>
                        <Icon type="appstore" />Navigation Two
                    </Menu.Item>
                    <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
                        <MenuItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}
