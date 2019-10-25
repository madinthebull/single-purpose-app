import React, { Component } from "react";
// import PropTypes from "prop-types";
import Button from "./Button";
import { Link } from "react-router-dom";

export class Landing extends Component {
  state = {
    buttons: [
      { text: 'SIGN UP', id: 1, },
      { text: 'LOG IN', id: 2, },
    ],
  }
  render() {
    const { buttons } = this.state;

    return (
      <React.Fragment>
        <h1>FatCat Login Page</h1>
        <form>
          <input type="text" name="username"></input><br />
          <input type="password" name="password"></input><br />

          <Link to="/signup">
            <Button text={buttons[0].text} key={buttons[0].id} />
          </Link>
          <Link to="/log">
            <Button text={buttons[1].text} key={buttons[1].id} />
          </Link>

        </form>
      </React.Fragment>
    );
  }
}

export default Landing;
