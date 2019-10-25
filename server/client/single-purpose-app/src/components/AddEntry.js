import React, { Component } from "react";
import ButtonComponent from './ButtonComponent';
import FloatingButton from './FloatingButton';
import TextField, { HelperText, Input } from "@material/react-text-field";
import moment from 'moment'
// import PropTypes from "prop-types";

export class AddEntry extends Component {
  state = {
    date: '',
    measurement: '',
    fab: [
      { text: 'Add a New Entry', id: 0, },
    ],
    buttons: [
      { text: 'Cancel', id: 1, },
      { text: 'Add Entry', id: 2, },
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
      date: "",
      measurement: "",
      fab: [{ text: "New Entry", id: 0 }],
      buttons: [
        {
          text: "Cancel",
          id: 0,
          outlined: true,
          raised: true,
          unelevated: false,
          classNames: ""
        },
        {
          text: "Add Button",
          id: 1,
          outlined: false,
          raised: true,
          unelevated: false,
          classNames: ""
        }
      ]
    });
  }

  showEntryForm = e => {
    e.preventDefault();
    console.log(e.target);
  }

  render() {
    // Get timestamp
    moment().format("Do YYYY, h:mm:ss a");
    // Get time
    // var date = timestamp;
    // console.log(timestamp);

    const { buttons } = this.state;
    const { fab } = this.state;


    return (
      <React.Fragment>
        <div style={{ height: "100vh" }}>
          {/* overlay button */}
          <FloatingButton text={fab[0].text} key={fab[0].id} />
          <div
          style={{ display: "", backgroundColor: "#268286" }}
          onClick={this.showEntryForm}>
            <p>Current Date</p>
            {/* <p>{date}</p> */}

            <p>Current Time</p>
            {/* <p>{timestamp}</p> */}

            {/* Measurement input */}
            <form>
              <TextField
                label="measurement"
                helperText={<HelperText>Enter measurement here!</HelperText>}
              >
                <Input
                  value={this.state.measurement}
                  onChange={this.onInputChange}
                ></Input>
              </TextField>

              {/* Cancel and Add Button */}
              {buttons.map(button => (
                <ButtonComponent
                  text={button.text}
                  onSubmit={this.onFormSubmit}
                  key={button.id}
                  outlined={button.outlined}
                  raised={button.raised}
                  unelevated={button.unelevated}
                />
              ))}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddEntry;
