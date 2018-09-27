import React,{Component} from 'react'
import { Redirect } from 'react-router-dom'
import s from './login.css'

import * as userService from '../../services/userinfo'

export default class Login extends Component {
  state = {
    model: {
      loginName: '',
      password: ''
    },
    msg: '',
    success: false
  }
  componentDidMount() {
  }
  updateField = (fieldName, value) => {
    this.setState({
      model: {
        ...this.state.model,
        [fieldName]: value,
      }
    })
  }
  login = () => {
    userService.login(this.state.model)
    .then(() => {
      this.setState({
        success: true
      })
    }, resp => {
      this.setState({
        msg: resp.resMsg
      })
    })
  }
  render() {
    const { model, msg, success } = this.state

    if (success) {
      return <Redirect to="/"/>
    }
    return (
      <div className={s.root}>
        <div className={s.header}>
          <div className={s.logo}></div>
          <div className={s.title}>XX平台</div>
        </div>

        <div className={s.loginContainer}>
          <div className={s.loginLine}>
            <label htmlFor="login">
            <span className={`${s.fieldIcon} ${s.iconloginName}`}></span>
            <input
              id="login"
              type="text"
              className={s.field}
              placeholder="请输入账号"
              autoComplete="off"
              value={model.loginName}
              onChange={(e) => {
                this.updateField('loginName', e.target.value)
              }}
            />
            </label>
          </div>
          <div className={s.loginLine}>
            <label htmlFor="password">
            <span className={`${s.fieldIcon} ${s.iconPassword}`}></span>
              <input
                id="password"
                type="password"
                className={s.field}
                placeholder="请输入密码"
                value={model.password}
                autoComplete="off"
                onChange={(e) => {
                  this.updateField('password', e.target.value)
                }}
              />
            </label>
          </div>
          <div className={s.btn} onClick={this.login}>登录</div>
          {msg ?
            <div className={s.msg}>{msg}</div>
          : null}
        </div>
      </div>
    )
  }
};
