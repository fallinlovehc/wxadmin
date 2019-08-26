import React, { Component } from 'react';
import { Redirect, Switch, Route, withRouter } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Magazine from '@containers/magazine'
import Order from '@containers/order'
import Subscribe from '@containers/subscribe'
import System from '@containers/system'

import '@styles/common.less'


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '电子刊管理',
            defaultSelectedKeys: '/magazine'
        }
    }
    
    handleRoute = (data) => {
        this.setState({
            title: data.item.props.children
        });
        this.props.history.push(data.key)
    }
    defaultSelectedKeys = () => {
        const { location } = this.props;
        return [location.pathname]
    }
    render() {
        const { title } = this.state;
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                </Header>
                <Layout className="containers">
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            theme="dark"
                            defaultSelectedKeys={this.defaultSelectedKeys()}
                            style={{ height: '100%', borderRight: 0 }}
                            onClick={this.handleRoute}
                        >
                            <Menu.Item key="/magazine">电子刊管理</Menu.Item>
                            <Menu.Item key="/order">订单管理</Menu.Item>
                            <Menu.Item key="/subscribe">订阅管理</Menu.Item>
                            <Menu.Item key="/system">系统管理</Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 12px 12px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>
                            <Breadcrumb.Item>后台管理</Breadcrumb.Item>
                            <Breadcrumb.Item>{title}</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <div className='content'>
                                <Switch>
                                    <Route exact path='/' render={() => (
                                        <Redirect to="/magazine" />
                                    )}>
                                    </Route>
                                    <Route exact path='/magazine' component={Magazine}></Route>
                                    <Route exact path='/order' component={Order}></Route>
                                    <Route exact path='/subscribe' component={Subscribe}></Route>
                                    <Route exact path='/system' component={System}></Route>
                                    <Redirect to={'/404'}></Redirect>
                                </Switch>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(Router);