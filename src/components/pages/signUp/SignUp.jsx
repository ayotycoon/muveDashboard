import React, { Component } from 'react';

import Muve from "../../common/muve/Muve"
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
  submit = (e) => {
    e.preventDefault();
    this.props.history.push('/auth/dashboard');
  }
    render() {
        const myStyle = {
            backgroundImage: 'url("/assets/images/register.jpg")'
        }
        return (
          <div className="router-body" style={myStyle}>
            <div className="row">
              <div className="col-md-5 col-lg-5 text-center">
                <div className="text-sign-in d-none d-md-inline-block text-left">
                  <h1>Cash calls on steroids</h1>
                  <br></br>
                  Can't stand hetic queues due to an appointment ?<br></br>
                  <br></br>
                  <b>Muve's swift cash delivery</b> ensures your cash gets to
                  you before you say "<b>Jack-Robinson</b>"
                </div>
              </div>
              <div className="col-1 col-lg-3"></div>
              <div className="col-md-6 col-lg-4 p-5 sign-in-container text-center">
                <h3>
                  {" "}
                  <Muve />
                </h3>
                <br />

                <h2 className="text-secondary font-weight-bold">
                  Create your account
                </h2>
                <br />
                <form onSubmit={this.submit} className="text-left">
                  <div className="eachInput">
                    <label className="text-muted">Full name</label>
                    <input
                      className="form-control"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <br />
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
                  <br />
                  <div className="eachInput">
                    <label className="text-muted">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm your Password"
                    />
                  </div>
                  <br></br>

                  <br></br>
                  <button className="btn btn-block btn-primary">
                    Continue
                  </button>
                  <br></br>
                  <br></br>
                  <Link to="/sign-in">
                    <span className="d-block text-center">
                      Already have an account?{" "}
                      <span className="text-primary">Sign In</span>
                    </span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        );
    }
}
