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

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/Dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/AgeOfEmpires" exact>
            <AgeOfEmpires></AgeOfEmpires>
          </Route>
          <Route path="/AgeOfEmpires/:id">
            <Civilization></Civilization>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
