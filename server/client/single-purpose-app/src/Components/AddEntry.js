import React, { Component } from "react";
import Button from './Button';
import moment from 'moment'
// import PropTypes from "prop-types";

export class AddEntry extends Component {
  state = {
    date: '',
    measurement: '',
    buttons: [
      { text: 'Cancel', id: 1, },
      { text: 'Add Button', id: 2, },
    ],
  }

  // As data is entered, capture in state
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // On form submit, send entry data to db
  onFormSubmit = e => {
    const {
      date,
      measurement
    } = this.state

    const newEntry = {
      date,
      measurement
    }

    //reset form
    this.setState({
      date: '',
      measurement: '',
      buttons: [
        { text: 'Cancel', id: 1, },
        { text: 'Add Button', id: 2, },
      ],
    })
  }

  render() {
    // Get timestamp
    moment().format("Do YYYY, h:mm:ss a");
    // Get time
    // var date = timestamp;
    // console.log(timestamp);

    const { buttons } = this.state;
    return (
      <React.Fragment>
        {/* overlay button */}
        <button>New Entry</button>

        <h2>Current Date</h2>
        {/* <p>{date}</p> */}

        <h2>Current Time</h2>
        {/* <p>{timestamp}</p> */}

        {/* Measurement input */}
        <form>
          <textarea
            name="measurement"
            rows="10"
            cols="30"
            value={this.state.measurement}
            onChange={this.onInputChange}
          >
            Enter your measurement here.
          </textarea>

          {/* Cancel and Add Button */}
          {buttons.map(button => (
            <Button text={button.text} onSubmit={this.onFormSubmit} key={button.id} />
          ))}
        </form>
      </React.Fragment>
    );
  }
}

export default AddEntry;
