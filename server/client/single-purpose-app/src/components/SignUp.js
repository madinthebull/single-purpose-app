import React, { Component } from "react";
// import PropTypes from "prop-types";
import ButtonComponent from "./ButtonComponent";
import { Link } from "react-router-dom";

export class SignUp extends Component {
         state = {
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
                     <ButtonComponent text={button.text} key={button.id} outlined={button.outlined} raised={button.raised} unelevated={button.unelevated} />
                   </Link>
                 ))}
               </form>
             </React.Fragment>
           );
         }
       }

export default SignUp;
