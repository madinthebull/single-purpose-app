import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class Entry extends Component {
  render () {
    // destructure props
    const { entry } = this.props;

    return (
      <React.Fragment>
        <tr className="mdc-data-table__row">
          <td className="mdc-data-table__cell">{entry.date}</td>
          <td className="mdc-data-table__cell mdc-data-table__cell--numeric">{entry.time}</td>
          <td className="mdc-data-table__cell mdc-data-table__cell--numeric">
            {entry.amount}
          </td>
          <td className="mdc-data-table__cell">{entry.user}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Entry;
