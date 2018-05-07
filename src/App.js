import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Users from "./Users";
import Auth from "./Auth";

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Navbar/>
      <section className="section">
        <div className="container">
          <Switch>
            <Redirect exact from="/" to="/admin/"/>
            <Route exact path="/admin" component={Users}/>
            <Route exact path="/admin/auth" component={Auth}/>
            <Route exact path="/admin/project" component={Projects}/>
          </Switch>
        </div>
      </section>
    </Fragment>
  </BrowserRouter>
);

export default App;
