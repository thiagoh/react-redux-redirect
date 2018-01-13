import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInUser, addClaps } from '../actions';

export class AppImpl extends Component {
  loginUser() {
    this.props.signInUser('John Doe');
  }

  addClaps() {
    this.props.addClaps();
  }

  renderUserMessage() {
    if (this.props.user) {
      return (
        <div>
          <h1>Hello: {this.props.user}</h1>
          <p>Click on claps if you want to thank us and be redirected to a thank-you page!</p>
        </div>
      );
    }
    return (
      <div>
        <h1>Hello! Who are you?</h1>
        <p>Click on Login so that we know who you are</p>
      </div>
    );
  }

  renderClaps() {
    if (this.props.claps) {
      return (
        <p>
          {this.props.user} clapped: {this.props.claps} times!
        </p>
      );
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderUserMessage()}
          {this.renderClaps()}
        </div>

        <div className="row">
          <div className="col-md-12">
            <button type="button" className="btn btn-primary" onClick={this.loginUser.bind(this)}>
              Login
            </button>
            <button type="button" className="btn btn-primary" onClick={this.addClaps.bind(this)}>
              +Claps
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.mainReducer.user,
    claps: state.mainReducer.claps
  };
};

export const App = connect(mapStateToProps, {
  signInUser,
  addClaps
})(AppImpl);
