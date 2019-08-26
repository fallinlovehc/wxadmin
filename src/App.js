import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'antd/dist/antd.css';

import Router from '@containers/router'
import Login from '@containers/login'
import AuthorizedRoute from '@components/Authorization'

//样式
import '@styles/common.less'

document.title = '后台管理';

class App extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/login' component={Login}></Route>
            <AuthorizedRoute path='/' component={Router}></AuthorizedRoute>
          </Switch>
        </BrowserRouter>
      </ConfigProvider>
    )
  }
}
export default App