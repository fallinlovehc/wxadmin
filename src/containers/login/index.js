import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Form, Icon, Input, Button } from 'antd';
import { Storage } from '@utils'
import './index.less'



class NormalLoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.login(values)
      }
    });
  };

  login = (data) => {
    Storage.set('adminToken', data)
    this.props.history.push('/magazine')
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-page">
        <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
            {getFieldDecorator('username', {
                rules: [{ required: true, message: '用户名不能为空' }],
            })(
                <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
                />,
            )}
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('password', {
                rules: [{ required: true, message: '密码不能为空' }],
            })(
                <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
                />,
            )}
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
                登录
            </Button>
            </Form.Item>
        </Form>
      </div>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default withRouter(Login);