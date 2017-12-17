import React, {Component} from 'react';
import {
    Button,
    Dropdown,
    Input,
    Tooltip,
    Collapse,
    Card,
    Table,
    Modal,
    Alerts,
    Badge,
    Breadcrumb,
    Well,
    Progress,
    Popover
} from './components'

import {component} from './components'

export default class App extends Component {
    state = {
        visible: false
    };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
        return true;
    };

    handleCancel = (e) => {
        console.log(e.target);
        this.setState({
            visible: false,
        });
    };

    render() {
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="#">{text}</a>,
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                  <a href="#">Action 一 {record.name}</a>
                    <span>|</span>
                  <a href="#">Delete</a>
                    <span>|</span>
                  <a href="#">
                      More actions
                  </a>
                </span>
            ),
        }];

        const tableData = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }];
        console.log(component)
        return (
            <div>
                <h1>Button&&Modal</h1>
                <Button onClick={this.showModal}>打开模态层</Button>
                <h1>Dropdown</h1>
                <Dropdown>
                    <a href="#">
                        Hover me
                    </a>
                </Dropdown>
                <h1>Tooltip</h1>
                <Tooltip>
                    <span>请把鼠标移动至此</span>
                </Tooltip>
                <br/>
                <h1>Collapse</h1>
                <Collapse>
                    <Collapse.Panel header='1.请点击'>
                        <p>text111</p>
                    </Collapse.Panel>
                    <Collapse.Panel header='2.请点击'>
                        <p>text222</p>
                    </Collapse.Panel>
                    <Collapse.Panel header='3.请点击'>
                        <p>text333</p>
                    </Collapse.Panel>
                </Collapse>
                <br/>
                <h1>Card</h1>
                <Card title="Card title" extra={<a href="#">More</a>} style={{width: 300}}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <div style={{
                    backgroundColor: '#ddd',
                    padding: '30px',
                    display: 'inline-block',
                    marginLeft: '50px'
                }}>
                    <Card title="Card title" extra={<a href="#">More</a>} style={{width: 300}}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </div>
                <br/>
                <h1>Table</h1>
                <Table columns={columns} tableData={tableData}/>
                <br/>
                <h1>Input</h1>
                <Input disabled="" type="number"/>
                <Input after='after' defaultValue="123"/>
                <Input after="after" before='before'/>
                <Input before='before'/>
                <br/>
                <Modal visible={this.state.visible}
                       onOk={this.handleOk}
                       onCancel={this.handleCancel}>
                    <small>some contents...</small>
                    <br/>
                    <small>some contents...</small>
                    <br/>
                    <small>some contents...</small>
                    <br/>
                </Modal>
                <h1>Alerts</h1>
                <Alerts bgColor="primary" message="primary"/>
                <Alerts bgColor="success" closable
                        message="s uc ce214214214122 21 421 412 412 sssucce214214214122 21 421 412 412 sssucce214214214122 21 421 412 412 ss"/>
                <Alerts bgColor="info" closable
                        message="suc ce214214214122 21 421 412 412 sssucce214214214122 21 421 412 412 sssucce214214214122 21 421 412 412 sssucce214214214122 21 421 412 412 ss"/>
                <Alerts bgColor="dark" closable message="dark"/>
                <Alerts bgColor="danger" closable message="danger"/>
                <h1>Badge</h1>
                <Badge bgColor="primary">primary</Badge>
                <Badge bgColor="success">success</Badge>
                <Badge bgColor="light">light</Badge>
                <Badge bgColor="info">primary</Badge>
                <Badge bgColor="danger">success</Badge>
                <Badge bgColor="dark">light</Badge>
                <br/><br/>
                <h1>Well</h1>
                <Well><h3>WELL</h3><p>WELL</p>well well well well well <br/> well well well well well</Well>
                <br/>
                <h1>Breadcrumb</h1>
                <Breadcrumb zIndex="2" hover={false}/>
                <br/>
                <h1>Progress</h1>
                <div style={{width: '100%'}}><Progress type='line' status='active'/></div>
                <div style={{width: '100%'}}><Progress type='line' percent={30} status='active' show={false}/></div>
                <div style={{width: '100%'}}><Progress type='line' percent={50} format={percent => `${percent} Days`}
                                                       status='active'/></div>
                <div style={{width: '100%'}}><Progress type='line' percent={70} status='exception'/></div>
                <div style={{width: '100%'}}><Progress type='line' percent={100} status='success'/></div>
                <h1>Popover</h1>
                <br/><br/>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<Popover>
                    <button>1111111111111</button>
                </Popover>
            </div>
        );
    }
}
