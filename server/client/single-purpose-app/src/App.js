import React, { Component } from 'react'
import EntryLog from './Components/EntryLog'
import './App.scss'

class App extends Component {
  state = {
    entries: [
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
    return <EntryLog entries={this.state.entries} />;
  }
}

export default App
