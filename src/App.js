import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./Routes";


class App extends Component {
  render() {

      return (
        <Router>
          <div>
            <div className="navbar">
              <Link to="/">
                <div className="btn-container">Home Page</div>
              </Link>
              
            </div>
            <Routes />
          </div>
        </Router>
      );
    }
  }


export default App;
