import React, { Component } from "react";
// import PropTypes from "prop-types";
import ButtonComponent from "./ButtonComponent";
import { Link } from "react-router-dom";
import logo from '../assets/static/logo.svg'

export class Landing extends Component {
  state = {
    buttons: [
      { text: "SIGN UP", id: 1, outlined: true, raised: true, unelevated: false, classNames: '', },
      { text: "LOG IN", id: 2, outlined: false, raised: true, unelevated: false, classNames: '', }
    ]
  };

  render() {
    const { buttons } = this.state;

    return (
      <React.Fragment>
        <img src={logo} alt="Logo" />
        <form>
          <input type="text" name="username"></input>
          <br />
          <input type="password" name="password"></input>
          <br />

          <Link to="/signup">
            <ButtonComponent
              text={buttons[0].text}
              key={buttons[0].id}
              raised={buttons[0].raised}
              unelevated={buttons[0].unelevated}
              outlined={buttons[0].outlined}
              classNames={buttons[0].className}
            />
          </Link>
          <Link to="/log">
            <ButtonComponent
              text={buttons[1].text}
              key={buttons[1].id}
              raised={buttons[0].raised}
              unelevated={buttons[0].unelevated}
              outlined={buttons[0].outlined}
              classNames={buttons[1].className}
            />
          </Link>
        </form>
      </React.Fragment>
    );
  }
}

export default Landing;
