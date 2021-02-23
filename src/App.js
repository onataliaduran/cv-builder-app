import './App.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from './components/menu/Menu';
import Overview from './components/overview/Overview';
import Edit from './components/your_cvs/Edit';
import JobTracker from './components/job_tracker/JobTracker';


function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <div className="content"> 
          <Switch>
            <Route exact path="/">
              <Overview />
            </Route>
            <Route path="/yourDocs">
              <Edit />
            </Route>
            <Route path="/jobTracker">
              <JobTracker />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

