import React, { Component } from "react";
// import PropTypes from "prop-types";
import Entry from './Entry'
import AddEntry from './AddEntry'

export class EntryLog extends Component {
  render() {
    // destructure props
    const { entries } = this.props;

    return (
      <React.Fragment>
        {/* pass props to Entry component  */}
        {entries.map(entry =>
        <Entry key={entry.id} entry={entry} />
        )}

        <AddEntry />
      </React.Fragment>
    );
  }
}

export default EntryLog;
