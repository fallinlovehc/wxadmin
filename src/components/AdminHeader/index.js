import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Storage } from '@utils'
import { Icon, Avatar, Popover } from 'antd';
import './index.less'

const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
class AdminHeader extends Component {
    logout = () => {
        Storage.remove('adminToken')
        this.props.history.push('/login')
    }

    content = () => (
        <div className="pointer" onClick={this.logout}>
            <Icon type="logout" /> 退出登录
        </div>
    )
    render() {
        return (
            <div>
                <div className="header-left fl">
                     <div className="header-title">
                     后台管理系统
                     </div>
                </div>
                <div className="header-right">
                    <Popover content={this.content()} title="" trigger="hover">
                        <Avatar placement="bottom" className="pointer" style={{ backgroundColor: colorList[Math.floor(Math.random()*colorList.length)], verticalAlign: 'middle' }}>
                            admin
                        </Avatar>
                    </Popover>
                </div>
            </div>
        );
    }
}

export default withRouter(AdminHeader);