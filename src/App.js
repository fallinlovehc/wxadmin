import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment'
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

import Router from '@containers/router'
import Login from '@containers/login'
import Test from '@containers/test'
import AuthorizedRoute from '@components/Authorization'

//样式
import '@styles/common.less'

moment.locale('zh-cn');
document.title = '后台管理';

class App extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/test' component={Test}></Route>
            <AuthorizedRoute path='/' component={Router}></AuthorizedRoute>
          </Switch>
        </BrowserRouter>
      </ConfigProvider>
    )
  }
}
export default App