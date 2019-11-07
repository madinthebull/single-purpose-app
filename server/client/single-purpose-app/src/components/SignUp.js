import React, { Component } from "react";
// import PropTypes from "prop-types";
import ButtonComponent from "./ButtonComponent";
import { Link } from "react-router-dom";
import logo from '../assets/static/logo.svg'

// import Material Design components
import TextField, { HelperText, Input } from "@material/react-text-field";

export class SignUp extends Component {
  state = {
    username: '',
    password: '',
    passwordConfirmation: '',
    buttons: [
      {
        text: "CANCEL",
        id: 1,
        outlined: true,
        raised: true,
        unelevated: false,
        classNames: ""
      },
      {
        text: "CREATE ACCOUNT",
        id: 2,
        outlined: false,
        raised: true,
        unelevated: false,
        classNames: ""
      }
    ]
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    this.setState({user: 'Madeline', id: '4'})
  }

  render() {
    const { buttons } = this.state;

    return (
      <div className="page signUp-page">
        <img className="logo" src={logo} alt="Logo" />
        <div className="page__content">
          <form>
            <TextField
              label="Username"
              helperText={<HelperText>Enter a username.</HelperText>}
            >
              <Input
                name="username"
                value={this.state.username}
                onChange={this.onInputChange}
              />
            </TextField>
            <br />
            <TextField
              label="Create a password"
              trailingIcon={<span className="material-icons">visibility</span>}
              helperText={<HelperText>Enter a password.</HelperText>}
            >
              <Input
                name="password"
                value={this.state.password}
                onChange={this.onInputChange}
              />
            </TextField>
            <br />
            <TextField
              label="Confirm password"
              trailingIcon={<span className="material-icons">visibility</span>}
              helperText={<HelperText>Enter your password again.</HelperText>}
            >
              <Input
                name="passwordConfirmation"
                value={this.state.passwordConfirmation}
                onChange={this.onInputChange}
              />
            </TextField>
            <br />

            {buttons.map(button => (
              <Link to="/log">
                <ButtonComponent
                  text={button.text}
                  key={button.id}
                  outlined={button.outlined}
                  raised={button.raised}
                  unelevated={button.unelevated}
                />
              </Link>
            ))}
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
