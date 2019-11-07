import React, { Component } from "react";
import { fetchEntries, createEntry } from '../redux/actions';
import { connect } from "react-redux";

// import components to render
import DataTable from './DataTable'
import EntryScreenSuccess from './EntryScreenSuccess'

// import Material Design components
import Fab from "@material/react-fab";
import Dialog, { DialogContent, DialogFooter, DialogButton } from "@material/react-dialog";
import TextField, { HelperText, Input } from "@material/react-text-field";

// import libraries
import moment from 'moment'
import uuid from 'uuid/v4'

 // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'


// import PropTypes from "prop-types";

export class EntryLog extends Component {
  state = {
    fab: { text: 'Add a New Entry', id: 0, },
    showEntryForm: false,
    showEntryScreenSuccess: false,
    date: '',
    measurement: '',
    uid: '',
    id: '',
    buttons: [
      { text: 'Cancel', id: 1, },
      { text: 'Add Entry', id: 2, },
    ],
  }

  componentDidMount() {
    this.props.fetchEntries();
  }

  showEntryForm = e => {
    e.preventDefault();

    // show Add Entry form on click
    this.setState({showEntryForm: true});
  }

  // As data is entered, capture in state
  onInputChange = e => {
    var date = new Date();

    const uniqueId = uuid();

    this.setState({ [e.target.name]: e.target.value });
    this.setState({uid: 'Madeline', id: uniqueId, date: date});
  }

  // On form submit, send entry data to db
  onFormSubmit = e => {
    e.preventDefault();

    const {
      date,
      measurement, uid, id
    } = this.state

    const newEntry = {
      date,
      measurement,
      uid,
      id,
    };

    console.log('newEntry', newEntry);
    this.props.createEntry(newEntry);

    // Show entry screen with animation
    this.setState({showEntryScreenSuccess: true});
    setTimeout(() => {
      // after x amount of time, hide success screen
      this.setState({ showEntryScreenSuccess: false });
    }, 4000);

    //reset form
    this.setState({
      date: "",
      measurement: "",
      uid: "",
      id: "",
      fab: { text: "Add a New Entry", id: 0 },
      showEntryForm: false,
      buttons: [{ text: "Cancel", id: 1 }, { text: "Add Entry", id: 2 }]
    });
  }

  // Update component when we create a new company
  // componentDidUpdate(prevProps) {
  //   console.log("this.props.entries before fetching entries", this.props.entries);
  //   console.log("prevProps before fetching entries", prevProps);
  //   if (prevProps.entries.length !== this.props.entries.length) {
  //     this.props.fetchEntries();

  //       console.log(
  //         "this.props.entries after fetching entries",
  //         this.props.entries
  //       );
  //       console.log("prevProps after fetching entries", prevProps);
  //   }
  // }

  render() {
    // destructure state & props
    const { fab, showEntryScreenSuccess, showEntryForm } = this.state;
    const { entries } = this.props;
    // Get timestamp
    const date = new Date();
    const currentDate = moment(date).format('L');
    const currentTime = moment(date).format('LT');

    if (showEntryScreenSuccess) {
      return (
        <EntryScreenSuccess />
      )
    } else {
    return (
      <React.Fragment>
        {/* data table */}
        <DataTable entries={entries} />
        {/* overlay button */}
        <Fab
          className="mdc-fab mdc-fab--extended"
          icon={<span className="material-icons">add</span>}
          textLabel={<span className="mcd-fab__label">{fab.text}</span>}
          style={{ position: "absolute", bottom: "15px" }}
          onClick={this.showEntryForm}
        ></Fab>
        <Dialog open={showEntryForm}>
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
        </Dialog>
      </React.Fragment>
    );
    }
  }
}

const mapStateToProps = state => {
  return {
    entries: state.entries.entries,
    createEntry: state.createEntry
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createEntry: newEntry => dispatch(createEntry(newEntry)),
    fetchEntries: () => dispatch(fetchEntries())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryLog);
