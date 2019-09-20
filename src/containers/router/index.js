import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import AdminHeader from '@components/AdminHeader'
import Routes from './routes'

import '@styles/common.less'

const { Header, Content, Sider } = Layout;

const menuList = [
    {
        key: '/magazine',
        label: '电子刊管理',
        icon: <Icon type="profile" />,
    }, {
        key: '/order',
        label: '订单管理',
        icon: <Icon type="ordered-list" />,
    }, {
        key: '/subscribe',
        label: '订阅管理',
        icon: <Icon type="fire" />,
    }, {
        key: '/system',
        label: '系统管理',
        icon: <Icon type="apartment" />,
    }
]

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    handleRoute = (data) => {
        this.setState({
            title: data.item.props.children[1]
        });
        this.props.history.push(data.key)
    }
    defaultSelectedKeys = () => {
        const { location } = this.props;
        const t = location.pathname;
        const y = `/${t.split('/').filter(v => v)[0]}`
        
        return [y];
    }
    componentDidMount() {
        const { location } = this.props;
        const t = location.pathname;
        const y = `/${t.split('/').filter(v => v)[0]}`
        for (let v of menuList) {
            if (v.key === y) {
                this.setState({
                    title: v.label
                })
            }
        }
    }
    render() {
        const { title } = this.state;
        return (
            <Layout>
                <Header className="header">
                    <AdminHeader></AdminHeader>
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
                            { menuList.map((item, index) => (
                                <Menu.Item key={item.key}>{item.icon}{item.label}</Menu.Item>
                            ))}
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
                                overflowY: 'auto',
                            }}
                        >
                            <Routes></Routes>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(Router);