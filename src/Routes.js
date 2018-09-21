import React from "react";
import { Route } from "react-router-dom";
import LogIn from "./LogInInterface/login.js";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <LogIn/>} />
   
      
      </div>
    );
  }
}
export default Routes;
