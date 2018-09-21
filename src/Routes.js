import React from "react";
import { Route } from "react-router-dom";
import LogIn from "./LoginInterface/login";
import HomeAdmin from './AdminInterfaces/HomePageAdmin'
import HomeUser from './UserInterfaces/HomePageUser'

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <LogIn/>} />
        <Route exact path='/home-admin' render={() => <HomeAdmin/>}/>
        <Route exact path='/home-user' render={() => <HomeUser/>}/>
      </div>
    );
  }
}
export default Routes;
