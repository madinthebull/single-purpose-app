import React, { Component } from "react";
import _ from "lodash";

// import components to render
import Entry from './Entry'

export class DataTable extends Component {
  render() {
    const { entries } = this.props;

    return (
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
    )
  }
}

export default DataTable;
