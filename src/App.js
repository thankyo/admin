import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "./reducers/project";
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.get();
  }
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Projects</h1>

        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ project }) => ({ project });
const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({ get: actions.project.get }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
