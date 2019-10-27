import React, { Component } from "react";
// import PropTypes from "prop-types";
import ButtonComponent from './ButtonComponent'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

export class Landing extends Component {
  render() {

    return (
      <div className="page landing-page">
        <img className="logo" src={logo} alt="Logo" />
        <div className="page__content">
          <p>
            Track when you last completed an important task. Never forget when
            you last fed the cat again.
          </p>
          <Link to="/login">
            <ButtonComponent
              text={"Get Started"}
              classNames={"mdc-button--raised"}
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
