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
              {entries.map(entry => (
                <Entry key={entry.id} entry={entry} />
              ))}
            </tbody>
          </table>
        </div>
        {/* pass props to Entry component  */}

        <AddEntry />
      </React.Fragment>
    );
  }
}

export default EntryLog;
