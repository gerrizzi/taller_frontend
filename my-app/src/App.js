import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import AgeOfEmpires from './components/AgeOfEmpires';
import Civilization from './components/Civilization';
import Login from './components/Login';
import Signin from './components/Signin';
import MyExercises from './components/MyExercises';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/Login">
            <Login></Login>
          </Route>
          <Route path="/Signin">
            <Signin></Signin>
          </Route>
          <Route path="/MyExercises">
            <MyExercises></MyExercises>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
