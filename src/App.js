import React, { Component } from 'react';
import './App.css';
import {Router, Link} from '@reach/router'

import AuthWall from './components/AuthWall'

import Layout from "./components/Layout"
import NotFound from './components/NotFound'
import Ambulances from './components/Ambulances'
import Landing from './components/Landing'

class App extends Component {
  render() {
    return (
      <Layout>
        <AuthWall>
          <Router>
            <Landing path="/"/>
            <Ambulances path="/ambulances"/>
            <NotFound default />
          </Router>
        </AuthWall>
      </Layout>
    );
  }
}

export default App;
