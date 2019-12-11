import React, { Component } from 'react';
import Muve from '../../../../common/muve/Muve';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss";
import { Grid, CreditCard, Briefcase } from "react-feather";

export default class Navbar extends Component {
    render() {
        return (
          <div id="NavBar">
            <div className="border-bottom-light">
              <div className="container pt-2 pb-2">
                <div className="row">
                  <div className="col-3 header col-md-4 col-lg-4">
                    <h2>
                      <Muve />
                    </h2>
                  </div>
                  <div className="col-7 col-md-6 col-lg-4 p-1">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <img alt="search" src="/assets/icons/search.svg" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 p-0 col-md-2 col-lg-4 text-right">
                    <img
                      alt="profile image"
                      src="/assets/images/user.svg"
                      className="profile-img mr-1"
                    />
                    <i className="fa img-icon fa-angle-down text-muted"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom-light text-center text-muted">
              <NavLink activeClassName="active-nav" to="/auth/dashboard">
                <div className="d-inline-block v-align-top  p-3 each-nav">
                  <span className="img-icon mr-3">
                    <Grid />
                  </span>
                  <span className="each-nav-text">Dashboard</span>
                </div>
              </NavLink>
              <NavLink activeClassName="active-nav" to="/auth/cashcall">
                <div className="d-inline-block v-align-top p-3  each-nav">
                  <span className="img-icon mr-3">
                    <CreditCard />
                  </span>
                  <span className="each-nav-text">Cash Call</span>
                </div>
              </NavLink>
              <NavLink activeClassName="active-nav" to="/auth/balance">
                <div className="d-inline-block v-align-top p-3  each-nav">
                  <span className="img-icon mr-3">
                    <Briefcase />
                  </span>
                  <span className="each-nav-text">Balance</span>
                </div>
              </NavLink>
            </div>
          </div>
        )
    }
}
