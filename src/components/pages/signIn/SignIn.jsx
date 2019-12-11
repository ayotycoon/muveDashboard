import React, { Component } from "react";

import Muve from "../../common/muve/Muve";

import { Link } from "react-router-dom";

export default class SignIn extends Component {
  submit = (e) => {
    e.preventDefault();
    this.props.history.push('/auth/dashboard');
  }
  render() {
    const myStyle = {
      backgroundImage: 'url("/assets/images/login.jpg")'
    };
    return (
      <div className="router-body" style={myStyle}>
        <div className="row">
          <div className="col-md-5 col-lg-5 text-center">
            <div className="text-sign-in d-none d-md-inline-block text-left">
              <h1>Your Flexy Wallet</h1>
              <br></br>
              On the road and short of cash ?<br></br>
              <br></br>
              Your <b>Muve flexible Wallet</b> got you covered, just login from
              your phone and make that cash call
            </div>
          </div>
          <div className="col-1 col-lg-3"></div>
          <div className="col-md-6 col-lg-4 p-5 sign-in-container text-center">
            <h3>
              {" "}
              <Muve />
            </h3>
            <br />

            <h2 className="text-secondary font-weight-bold">Sign In</h2>
            <br />
            <form onSubmit={this.submit} className="text-left">
              <div className="eachInput">
                <label className="text-muted">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <br />
              <div className="eachInput">
                <label className="text-muted">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your Password"
                />
              </div>
              <br></br>
              <Link to="/forgot-password">
                <span className="text-primary">Forgot your password?</span>
              </Link>
              <br></br>
              <br></br>
              <button className="btn btn-block btn-primary">Continue</button>
              <br></br>
              <br></br>
              <Link to="/sign-up">
                <span className="d-block text-center">
                  Don't have an account?{" "}
                  <span className="text-primary">Sign Up</span>
                </span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
