import * as React from 'react';
import {style} from "typestyle";
import {Link, HashRouter} from "react-router-dom";
import {Menu, Icon} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const componentBaseStyle = style({
    backgroundColor: '#171C23',
});

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
                    onClick={
                        () => (
                            history.replaceState({}, "/", "/")
                        )
                    }
                >
                    <Menu.Item key="mail">
                        <Icon type="rocket" />Home
                    </Menu.Item>
                    <Menu.Item key="" onClick={
                        () => (
                            history.replaceState({}, "/teach-app", "/teach-app")
                        )
                    }>
                        <Icon type="layout" />teach-app
                    </Menu.Item>
                    <SubMenu title={<span><Icon type="setting"/>Navigation Three - Submenu</span>}>
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
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four -
                            Link</a>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}
