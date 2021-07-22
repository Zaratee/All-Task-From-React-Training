import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function NavBar() {
    return (
        <nav>
          <div className="navbar">
            <div className="navbar-container">
              <Link to="/water" className="link">
                <div className = "navbar-item">
                  State of Water
                </div>
              </Link>
           
              <Link to="/movie" className="link">
                <div className = "navbar-item">
                  Guess the Movie
                </div>
              </Link>
            
              <Link to="/todo" className="link">
                <div className = "navbar-item">
                  ToDo List
                </div>
              </Link>
            </div>
          </div>
            
        </nav>
    );

}

export default NavBar;