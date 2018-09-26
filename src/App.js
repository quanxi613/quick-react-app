import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom'
import './App.css'

import PrivateRoute from './PrivateRoute'
import LoginWrapper from './scenes/Login';
import Example from './scenes/Example'



class BasicRoutes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginWrapper} />
          <PrivateRoute>
            <div style={{ padding: '45px 0 20px', height: '100%' }}>
              <Switch>
                <Route exact path="/" component={Example} />
              </Switch>
            </div>
          </PrivateRoute>
        </Switch>
      </Router>
    )
  }
}

export default BasicRoutes




