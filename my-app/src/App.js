import React from "react";
import NavBar from "./components/NavBar";
import ToDoApp from "./excercises/ToDoApp/App"
import StateOfWater from "./excercises/StateOfWater/App"
import GuessTheMovie from "./excercises/GuessTheMovie/App"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/water">
            <StateOfWater/>
          </Route>
          <Route path="/movie">
            <GuessTheMovie/> 
          </Route>
          <Route path="/todo">
            <ToDoApp/> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
