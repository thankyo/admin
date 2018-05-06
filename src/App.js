import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Users from "./Users";

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Users}/>
        <Route exact path="/project" component={Projects}/>
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default App;
