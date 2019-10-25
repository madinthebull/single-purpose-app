import React, { Component } from "react";
// import PropTypes from "prop-types";
import ButtonComponent from './ButtonComponent'
import { Link } from 'react-router-dom'

export class Landing extends Component {
  render() {

    return (
      <React.Fragment>
        <h1>Fatcat Landing Page</h1>
        <Link to="/login">
          <ButtonComponent text={"Get Started"} classNames={'mdc-button--raised'} />
        </Link>
      </React.Fragment>
    );
  }
}

export default Landing;
