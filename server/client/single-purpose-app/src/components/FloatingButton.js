import React, { Component } from "react";
// import PropTypes from 'prop-types'
import Fab from "@material/react-fab";

class Button extends Component {
  render() {
    // destructure props
    const { text } = this.props;

    return (
      <React.Fragment>
        <Fab
        className="mdc-fab mdc-fab--extended"
        icon={<span className="material-icons">add</span>}>
          <span className="mcd-fab__label">{text}</span>
        </Fab>
      </React.Fragment>
    );
  }
}

export default Button;
