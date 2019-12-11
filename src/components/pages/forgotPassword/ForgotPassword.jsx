import React, { Component } from 'react';

import Muve from "../../common/muve/Muve"
import { Link } from 'react-router-dom';
import "./ForgotPassword.scss"

export default class ForgotPassword extends Component {
    render() {
        const myStyle = {
            backgroundColor: '#F5F6F9'
        }
        return (
   
            <div className="forgot-password router-body" style={myStyle}>
   
                <div className="forgot-password-container text-center p-5 rounded">
          
                        <h3> <Muve /></h3>
                        <br />
                   
                        <h2 className="text-secondary font-weight-bold">Change Password</h2>
                        <br />
                        <form className="text-left">
                      
                            <div className="eachInput">
                                <label className="text-muted">New Password</label>
                                <input type="password" className="form-control" placeholder="Enter your Password" />
                            </div>
                            <br />
                            <div className="eachInput">
                                <label className="text-muted">Confirm Password</label>
                                <input type="password" className="form-control" placeholder="Confirm your Password" />
                            </div>
                            <br></br>
                            
                            <br></br>
                            <button className="btn btn-block btn-primary">Continue</button>
                            <br></br>
                            <br></br>
                            <Link to="/sign-in"><span className="d-block text-center">Already have an account? <span className="text-primary" >Sign In</span></span></Link>
    
                        <Link to="/sign-up"><span className="d-block text-center">Don't have an account? <span className="text-primary" >Sign Up</span></span></Link>
                        </form>
                    </div>
                </div>
        
        )
    }
}
