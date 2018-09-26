import React from 'react'
import { Redirect } from 'react-router-dom'

import * as userService from './services/userinfo'

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      isFetched: false,
    }
  }
  componentDidMount() {
    userService.getUserInfo()
      .then(resp => {
        // 全局设置必须在setState之前,否则后续component可能拿不到user
        window.cp.user = resp
        this.setState({
          user: resp,
          isFetched: true,
        })
      })
  }
  render() {
    const { user, isFetched } = this.state
    if (isFetched) {
      if (user) {
        return <div>{this.props.children}</div>
      } else {
        return <Redirect to="/login"/>
      }
    } else {
      return null
    }

  }
}

export default PrivateRoute
