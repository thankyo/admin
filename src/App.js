import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Users from "./Users";

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Navbar/>
      <Switch>
        <Redirect exact from="/" to="/admin/"/>
        <Route exact path="/admin" component={Users}/>
        <Route exact path="/admin/project" component={Projects}/>
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default App;
