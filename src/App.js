import React, { Component } from 'react';
import './App.css';
import {Router, Link} from '@reach/router'

import AuthWall, {AuthContext} from './components/AuthWall'

import Layout from "./components/Layout"
import NotFound from './components/NotFound'
import Ambulances from './components/Ambulances'
import Landing from './components/Landing'
import LoginSignup from './components/LoginSignup'
import ModeratorLogin from './components/ModeratorLogin'
import ModeratorDashboard from './components/ModeratorDashboard'
class App extends Component {
  render() {
    return (
        <AuthWall>
          <Layout>
            <AuthContext.Consumer>
              {auth => (
              <Router>
                {auth.isAuthenticated && <Landing path="/"/>}
                {auth.isAuthenticated && <Ambulances path="/ambulances"/>}
                {auth.isAuthenticated && <NotFound default />}
                {auth.isAuthenticated && auth.user.isModerator && <ModeratorDashboard path="/moderator" />}
                {!auth.isAuthenticated && <ModeratorLogin path="/moderator" />}
                {!auth.isAuthenticated && <LoginSignup path="*" />}
              </Router>
              )}
            </AuthContext.Consumer>
          </Layout>
        </AuthWall>
    );
  }
}

export default App;
