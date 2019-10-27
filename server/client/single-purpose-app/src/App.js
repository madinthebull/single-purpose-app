import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Landing from './components/Landing'
import EntryLog from './components/EntryLog'
import Login from './components/Login'
import SignUp from './components/SignUp'

import './assets/sass/main.scss'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <Landing /> } />
          <Route exact path='/login' render={() => <Login /> } />
          <Route exact path='/signup' render={() => <SignUp /> } />
          <Route exact path='/log' render= {() => <EntryLog /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App
