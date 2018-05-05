import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "./reducers/project";
import './App.css';

const Project = ({ url, title, shortDescription, avatar, webStack }) => (
  <article className="media">
    <figure className="media-left">
      <p className="image is-64x64">
        <img src={avatar} alt="Project avatar"/>
      </p>
    </figure>
    <div className="media-content">
      <div className="content">
        <div>
          <a href={url}><strong>{url}</strong></a>
          <strong>{webStack}</strong><br/>
          <h3 className="title is-size-5">{title}</h3>
          {shortDescription}
        </div>
      </div>
    </div>
  </article>
);

const AllProjects = ({ projects, source }) => (
  <Fragment>
    {projects.length !== 0 && <h2 className="subtitle is-size-6">{source}</h2>}
    {projects.map((prj, i) => <Project key={i} {...prj}/>)}
  </Fragment>
);

const withoutInstalled = (projects, installed) => projects.filter(({ url }) => installed.some(prj => prj.url === url))

const UserProject = ({ user, google, tumblr, email, dibs, installed }) => (
  <Fragment>
    <h1 className="title is-size-6">{user}</h1>
    <AllProjects source="Google" projects={withoutInstalled(google, installed)}/>
    <AllProjects source="Tumblr" projects={withoutInstalled(tumblr, installed)}/>
    <AllProjects source="Email" projects={withoutInstalled(email, installed)}/>
    <AllProjects source="Dibs" projects={withoutInstalled(dibs, installed)}/>
    <AllProjects source="Installed" projects={installed}/>
    <hr/>
  </Fragment>
);

class App extends Component {
  state = { isLoading: true };

  componentWillMount() {

    this.props.get().then(() => this.setState({ isLoading: false }));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <div className="pageloader is-active"/>
        </div>
      );
    }
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Projects</h1>
          {this.props.projects.map((usrPrj, i) => <UserProject key={usrPrj.user} {...usrPrj}/>)}
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ project: { byId, withProject } }) => ({ projects: withProject.map(user => byId[user]) });
const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({ get: actions.project.get }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
