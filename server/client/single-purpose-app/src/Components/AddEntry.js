import React, { Component } from "react";
import Button from './Button';
import FloatingButton from './FloatingButton'
import moment from 'moment'
// import PropTypes from "prop-types";

export class AddEntry extends Component {
  state = {
    date: '',
    measurement: '',
    buttons: [
      { text: 'New Entry', id: 1, },
      { text: 'Cancel', id: 2, },
      { text: 'Add Button', id: 3, },
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

    console.log(newEntry);
    //reset form
    this.setState({
      date: '',
      measurement: '',
      fab: [
        { text: 'New Entry', id:0, },
      ],
      buttons: [
        { text: 'Cancel', id: 0, },
        { text: 'Add Button', id: 1, },
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
    // const { fab } = this.state;

    return (
      <React.Fragment>
        {/* overlay button */}
        {/* <FloatingButton text={fab[0].text} key={fab[0].id}/> */}

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

          {/* Fab, Cancel and Add Button */}
          {buttons.map(button => (
            <Button text={button.text} onSubmit={this.onFormSubmit} key={button.id} />
          ))}
        </form>
      </React.Fragment>
    );
  }
}

export default AddEntry;
