import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Landing from './components/Landing'
import EntryLog from './components/EntryLog'
import './App.scss'

class App extends Component {
  state = {
    entries: [
      // dummy data
      {
        id: 1,
        amount: "1/2 cup",
        date: "October 12, 2019 11:11AM",
      },
      {
        id: 2,
        amount: "1/4 cup",
        date: "October 12, 2019 05:00PM",
      },
      {
        id: 3,
        amount: '1/8 cup',
        date: 'October 13, 2019 8:11AM',
      },
      {
        id: 4,
        amount: '1/2 cup',
        date: 'October 13, 2019 5:00PM',
      },
      {
        id: 5,
        amount: '1/3 cup',
        date: 'October 14, 2019 7:36AM',
      },
    ]
  };

  render() {
    // pass dummy data to Entry Log component
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <Landing /> } />
          <Route exact path='/log' render= {() => <EntryLog entries={this.state.entries} /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App
