import React, { Component } from "react";
// import PropTypes from 'prop-types'
import Fab from "@material/react-fab";

class FloatingButton extends Component {
  render() {
    // destructure props
    const { text } = this.props;

    return (
      <React.Fragment>
        <Fab
          className="mdc-fab mdc-fab--extended"
          icon={<span className="material-icons">add</span>}
          textLabel={<span className="mcd-fab__label">{text}</span>}
          style={{ position: 'absolute', bottom: '15px' }}
        ></Fab>
      </React.Fragment>
    );
  }
}

export default FloatingButton;
