import React, { Component } from 'react';

import Muve from "../../common/muve/Muve"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { notAuth } from '../../common/helper.service';
import { __register } from '../../../providers/auth.service';
import { login } from '../../../store/actions/userAuth.action'

import LoaderC from "../../common/loader/LoaderC";

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    full_name: '',
    confirm_password: ''

  }
  componentWillMount() {
    notAuth(this.props)
  }
  submit = (e) => {
    e.preventDefault()
    __register(this.state).then(res => {

      this.props.login(res)
      this.props.history.push('/auth/dashboard');

    })
   // this.props.history.push('/auth/dashboard');
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
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
                      name='full_name'
                      value={this.state.full_name}
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <br />
                  <div className="eachInput">
                    <label className="text-muted">Email</label>
                    <input
                      type="email"
                      name='email'
                      value={this.state.email}
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <br />
                  <div className="eachInput">
                    <label className="text-muted">Password</label>
                    <input
                      type="password"
                      name='password'
                      value={this.state.password}
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="Enter your Password"
                    />
                  </div>
                  <br />
                  <div className="eachInput">
                    <label className="text-muted">Confirm Password</label>
                    <input
                      type="password"
                       name='confirm_password'
                      value={this.state.confirm_password}
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="Confirm your Password"
                    />
                  </div>
                  <br></br>

                  <br></br>
                  <button disabled={this.props.network.loading} className="btn btn-block btn-primary">
                    {this.props.network.loading ? <LoaderC /> : 'Continue'}

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

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, {login })(SignUp)

