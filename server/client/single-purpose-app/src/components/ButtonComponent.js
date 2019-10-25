import React, { Component } from "react";
import Button from "@material/react-button";
// import PropTypes from 'prop-types'

class ButtonComponent extends Component {
  render() {
    // destructure props
    const { text, classNames, outlined, raised, unelevated } = this.props;

    return (
      <Button
        className={classNames}
        outlined={outlined}
        raised={raised}
        unelevated={unelevated}>{text}</Button>
    );
  }
}

export default ButtonComponent;
