import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class Entry extends Component {
  render () {

    const { entry } = this.props;


    return (
      <React.Fragment>
        <div>
          <p>{entry.id}</p>
          <p>{entry.amount}</p>
          <p>{entry.date}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Entry;
