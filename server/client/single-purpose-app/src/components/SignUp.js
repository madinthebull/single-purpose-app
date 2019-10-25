import React, { Component } from "react";
// import PropTypes from "prop-types";
import Button from "./Button";
import { Link } from "react-router-dom";

export class SignUp extends Component {
  state = {
    buttons: [{ text: "CANCEL", id: 1 }, { text: "CREATE ACCOUNT", id: 2 }]
  };
  render() {
    const { buttons } = this.state;

    return (
      <React.Fragment>
        <h1>FatCat Signup Page</h1>
        <form>
          <input type="text" name="username"></input>
          <br />
          <input type="text" name="passwordCreation"></input>
          <br />
          <input type="text" name="passwordConfirmation"></input>
          <br />
          {buttons.map(button => (
            <Link to="/log">
              <Button text={button.text} key={button.id} />
            </Link>
          ))}
        </form>
      </React.Fragment>
    );
  }
}

export default SignUp;
