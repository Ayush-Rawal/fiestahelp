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
class App extends Component {
  render() {
    return (
      <Layout>
        <AuthWall>
            <AuthContext.Consumer>
              {auth => (
              <Router>
                {auth.isAuthenticated && <Landing path="/"/>}
                {auth.isAuthenticated && <Ambulances path="/ambulances"/>}
                {auth.isAuthenticated && <NotFound default />}
                {!auth.isAuthenticated && <ModeratorLogin path="/moderator" />}
                {!auth.isAuthenticated && <LoginSignup path="*" />}
              </Router>
              )}
            </AuthContext.Consumer>
        </AuthWall>
      </Layout>
    );
  }
}

export default App;
