import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Landing from './components/Landing'
import EntryLog from './components/EntryLog'
import Login from './components/Login'
import SignUp from './components/SignUp'

import axios from 'axios'
import './App.scss'

class App extends Component {
  state = {
    entries: [
      // dummy data
      {
        id: 1,
        amount: "1/2 cup",
        date: "October 12, 2019 11:11AM",
        user: 'Drew',
      },
      {
        id: 2,
        amount: "1/4 cup",
        date: "October 12, 2019 05:00PM",
        user: 'Drew',
      },
      {
        id: 3,
        amount: '1/8 cup',
        date: 'October 13, 2019 8:11AM',
        user: "Drew's girlfriend",
      },
      {
        id: 4,
        amount: '1/2 cup',
        date: 'October 13, 2019 5:00PM',
        user: 'Drew',
      },
      {
        id: 5,
        amount: '1/3 cup',
        date: 'October 14, 2019 7:36AM',
        user: 'Drew',
      },
    ]
  };

  // componentDidMount() {
  //   axios
  //     .get("https://dev-fatcat.pantheonsite.io/measurements", {
  //       headers: { "X-Requested-With": "XMLHttpRequest" }
  //     })
  //     .then(response =>
  //       this.setState({
  //         id: response.data.id,
  //         measurement: response.data.measurement,
  //         date: response.data.date
  //       })
  //     );
  // }


  render() {
    // pass dummy data to Entry Log component
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
