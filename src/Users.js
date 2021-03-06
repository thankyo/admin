import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "./reducers/user";
import './App.css';

const User = ({ id, avatar, firstName, lastName, email }) => (
  <article className="media">
    <figure className="media-left">
      <p className="image is-64x64">
        <img src={avatar} alt="User avatar"/>
      </p>
    </figure>
    <div className="media-content">
      <div className="content">
        <div>
          <a href={`/user/${id}`}><strong>{id}</strong></a><br/>
          <strong>{firstName} {lastName}</strong><br/>
          <strong>{email}</strong>
        </div>
      </div>
    </div>
  </article>
);

class Users extends Component {
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
      <Fragment>
        {this.props.users.map((usr) => <User key={usr.id} {...usr}/>)}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ user: { byId, all } }) => ({ users: all.map(user => byId[user]) });
const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({ get: actions.user.get }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
