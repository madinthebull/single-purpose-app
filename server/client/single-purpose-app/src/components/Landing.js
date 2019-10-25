import React, { Component } from "react";
// import PropTypes from "prop-types";
import Button from './Button'
import { Link } from 'react-router-dom'

export class Landing extends Component {
  render() {

    return (
      <React.Fragment>
        <h1>Fatcat Landing Page</h1>
        <Link to="/login">
          <Button text={"Get Started"} />
        </Link>
      </React.Fragment>
    );
  }
}

export default Landing;
