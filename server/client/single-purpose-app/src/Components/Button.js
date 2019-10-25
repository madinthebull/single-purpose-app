import React, { Component } from "react";
// import PropTypes from 'prop-types'

class Button extends Component {
  render() {
    const { text } = this.props;

    return (
      <React.Fragment>
        <button>{text}</button>
      </React.Fragment>
    );
  }
}

export default Button;
