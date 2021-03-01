import React from 'react';
import { Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div>
      <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/Dashboard" component={Dashboard} />
          <Route component={PageNotFound} />
        </Switch>
    </div>
  );
}

export default App;
