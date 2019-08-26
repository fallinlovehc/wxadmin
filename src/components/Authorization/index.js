import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Storage } from '@utils'

class AuthorizedRoute extends React.Component {

  render() {
    const { component: Component, ...rest } = this.props
    return (
      <Route {...rest} render={props => {
        return Storage.get('adminToken')
          ? <Component {...props} />
          : <Redirect to="/login" />
      }} />
    )
  }
}

export default AuthorizedRoute
