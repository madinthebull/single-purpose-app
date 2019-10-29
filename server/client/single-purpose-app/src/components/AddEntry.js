import React, { Component } from "react";
import ButtonComponent from './ButtonComponent';

// import Material Design components
import TextField, { HelperText, Input } from "@material/react-text-field";
import {
  DialogContent,
  DialogFooter,
  DialogButton
} from "@material/react-dialog";

// import libraries
import moment from 'moment'
import axios from 'axios'

// import PropTypes from "prop-types";

export class AddEntry extends Component {
  state = {
    date: '',
    measurement: '',
    user: '',
    id: '',
    buttons: [
      { text: 'Cancel', id: 1, },
      { text: 'Add Entry', id: 2, },
    ],
  }

  // As data is entered, capture in state
  onInputChange = e => {
    var date = new Date();
    this.setState({ [e.target.name]: e.target.value });
    this.setState({user: 'Madeline', id: '4', date: date});
  }

  // On form submit, send entry data to db
  onFormSubmit = e => {
    const {
      date,
      measurement, user, id
    } = this.state

    const newEntry = {
      date,
      measurement,
      user,
      id,
    };

    console.log('newEntry', newEntry);
    // axios
    //   .post("https://dev-fatcat.pantheonsite.io/measurements", { newEntry })
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    //reset form
    this.setState({
      date: '',
      measurement: '',
      user: '',
      id: '',
    });
  }

  render() {
    // Get timestamp
    const date = new Date();
    const currentDate = moment(date).format('L');
    const currentTime = moment(date).format('LT');
    return (
      <React.Fragment>
        <DialogContent>
          <p className="addEntryDialog__dateTime--label">Current Date</p>
          <p className="addEntryDialog__dateTime--display">{currentDate}</p>

          <p className="addEntryDialog__dateTime--label">Current Time</p>
          <p className="addEntryDialog__dateTime--display">{currentTime}</p>

          {/* Measurement input */}
          <form>
            <TextField
              label="measurement"
              type="text"
              helperText={<HelperText>Enter measurement here!</HelperText>}
            >
              <Input
                name="measurement"
                value={this.state.measurement}
                onChange={this.onInputChange}
              />
            </TextField>
          </form>
        </DialogContent>
        <DialogFooter>
          <DialogButton action="dismiss">Dismiss</DialogButton>
          <DialogButton action="accept" isDefault onClick={this.onFormSubmit}>
            Accept
          </DialogButton>
        </DialogFooter>
      </React.Fragment>
    );
  }
}

export default AddEntry;
