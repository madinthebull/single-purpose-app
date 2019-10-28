import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Landing from './components/Landing'
import EntryLog from './components/EntryLog'
import Login from './components/Login'
import SignUp from './components/SignUp'

import axios from 'axios'
import './assets/sass/main.scss'

class App extends Component {
  state = {
    entries: [],
  };

  componentDidMount() {
    axios
      .get("https://dev-fatcat.pantheonsite.io/measurements", {
        headers: {
          Accept: "application/hal+json",
          Authorization: "Basic ZmF0Y2F0OmZhdGNhdA=="
        }
      })
      .then(response =>
        this.setState({
          entries: response.data
        })
      );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <Landing /> } />
          <Route exact path='/login' render={() => <Login /> } />
          <Route exact path='/signup' render={() => <SignUp /> } />
          <Route exact path='/log' render= {() => <EntryLog entries={this.state.entries} /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App
