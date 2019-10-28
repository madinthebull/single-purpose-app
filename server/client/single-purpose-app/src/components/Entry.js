import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import moment from 'moment';

class Entry extends Component {
  render () {
    // destructure props
    const { entry } = this.props;
    const date = this.props.entry;
    const parsedDate = moment(date).format('L');
    const parsedTime = moment(date).format('LT');
    return (
      <React.Fragment>
        <tr className="mdc-data-table__row">
          <td className="mdc-data-table__cell">{parsedDate}</td>
          <td className="mdc-data-table__cell mdc-data-table__cell--numeric">
          {parsedTime}</td>
          <td className="mdc-data-table__cell mdc-data-table__cell--numeric">
            {entry.measurement}
          </td>
          <td className="mdc-data-table__cell">{entry.uid}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Entry;
