import React, { Component } from "react";
import { fetchEntries } from '../redux/actions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from 'lodash';

// import components to render
import Entry from './Entry'
import AddEntry from './AddEntry'

// import Material Design components
import Fab from "@material/react-fab";
import Dialog from "@material/react-dialog";

// import PropTypes from "prop-types";

export class EntryLog extends Component {
  state = {
    fab: { text: 'Add a New Entry', id: 0, },
    showEntryForm: false,
  }

  componentDidMount() {
    this.props.fetchEntries();
    console.log('this.props', this.props);
  }

  showEntryForm = e => {
    e.preventDefault();

    // show Add Entry form on click
    this.setState({showEntryForm: true});
  }

  // add newEntry to props
  // this.setState({ entries: [...this.state.entries, newEntry] });

  // Update component when we create a new company
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log('nextProps',nextProps);
  //   if (nextProps.entries) {
  //     if (nextProps.entries.length === 1) {
  //       // get all entries and update
  //       this.props.fetchEntries()
  //     }
  //     return true
  //   }
  // }

  render() {
    // destructure state & props
    const { fab, showEntryForm } = this.state;
    const { entries } = this.props;

    return (
      <React.Fragment>
        <div className="mdc-data-table">
          <table className="mdc-data-table__table" aria-label="">
            <thead>
              <tr className="mdc-data-table__header-row">
                <th
                  className="mdc-data-table__header-cell"
                  role="columnheader"
                  scope="col"
                >
                  Date
                </th>
                <th
                  className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                  role="columnheader"
                  scope="col"
                >
                  Time
                </th>
                <th
                  className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                  role="columnheader"
                  scope="col"
                >
                  Amount
                </th>
                <th
                  className="mdc-data-table__header-cell"
                  role="columnheader"
                  scope="col"
                >
                  User
                </th>
              </tr>
            </thead>
            <tbody className="mdc-data-table__content">
              {/* pass props to Entry component  */}
              {_.map(entries, entry => (
                <Entry key={entry.id} entry={entry} />
              ))}
            </tbody>
          </table>
        </div>
        {/* overlay button */}
        <Fab
          className="mdc-fab mdc-fab--extended"
          icon={<span className="material-icons">add</span>}
          textLabel={<span className="mcd-fab__label">{fab.text}</span>}
          style={{ position: "absolute", bottom: "15px" }}
          onClick={this.showEntryForm}
        ></Fab>
        <Dialog open={showEntryForm}>
          <AddEntry/>
        </Dialog>
        {/* {showEntryForm ? <AddEntry /> : null} */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { entries: state.entries.entries }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchEntries }, dispatch);
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(EntryLog);
