import React from "react";
import { Route } from "react-router-dom";
import LogIn from "./LoginInterface/login.js";
import SignUp from "./SignUpInterface/signup.js";


class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <LogIn/>} />
        <Route exact path ="/inscription" render={() => <SignUp/>}/>
      
      </div>
    );
  }
}
export default Routes;
