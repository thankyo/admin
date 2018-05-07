import React, { Component } from "react";
import api from "./reducers/api";

class Auth extends Component {

  state = { isLoading: false };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({ isLoading: true });
    api.auth(this.refs.token.value).then(() => {
      this.setState({ isLoading: false });
      window.location = "/admin";
    }).catch(() => {
      this.setState({ isLoading: false });
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field column is-one-third">
          <div className={this.state.isLoading ? `control is-loading` : `control`}>
            <input name="token" type="text" placeholder="Token" className="input" ref="token"/>
          </div>
        </div>
      </form>
    );
  }

}

export default Auth;