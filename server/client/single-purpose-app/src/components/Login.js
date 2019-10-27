import React, { Component } from "react";
// import PropTypes from "prop-types";
import ButtonComponent from "./ButtonComponent";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { auth_user } from "../actions";

// import Material Design components
import TextField, { HelperText, Input } from "@material/react-text-field";

export class Landing extends Component {
  state = {
    username: '',
    password: '',
    buttons: [
      { text: "SIGN UP", id: 1, outlined: true, raised: true, unelevated: false, classNames: '', },
      { text: "LOG IN", id: 2, outlined: false, raised: true, unelevated: false, classNames: '', }
    ]
  };

  // As data is entered, capture in state
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    const { username, password } = this.state;

    const login = {
      username,
      password
    };

    this.props.auth_user();
    console.log(this.props.authenticated);
  }

  render() {
    const { buttons } = this.state;

    return (
      <div className="page login-page">
        <img className="logo" src={logo} alt="Logo" />
        <div className="page__content">
          <form onSubmit={this.onSubmit}>
            <TextField
              label="Username"
              type="username"
              helperText={<HelperText>Enter your username.</HelperText>}
            >
              <Input
                name="username"
                value={this.state.username}
                onChange={this.onInputChange}
              />
            </TextField>
            <br />
            <TextField
              label="Password"
              type="password"
              trailingIcon={<span className="material-icons">visibility</span>}
              helperText={<HelperText>Enter your password.</HelperText>}
            >
              <Input
                name="password"
                value={this.state.password}
                onChange={this.onInputChange}
              />
            </TextField>
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
            <ButtonComponent
              text={buttons[1].text}
              key={buttons[1].id}
              raised={buttons[0].raised}
              unelevated={buttons[0].unelevated}
              outlined={buttons[0].outlined}
              classNames={buttons[1].className}
            />
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.authenticated }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ auth_user }, dispatch)
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(Landing)

// export default Landing;
