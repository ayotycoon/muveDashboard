import React, { Component } from 'react';
import Muve from '../../../../common/muve/Muve';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss";
import { Grid, CreditCard, Briefcase } from "react-feather";
import {connect} from 'react-redux'
import {logout} from '../../../../../store/actions/userAuth.action'



 class Navbar extends Component {
  lastScrollTop = 0;
  isScrollup = false;
  NavbarEl;

  componentDidMount = () => {
    this.NavbarEl = document.querySelector('#NavBar-scroll');
    
// hide nav on scroll

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener("scroll", () =>  { // or window.addEventListener("scroll"....
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > this.lastScrollTop) {
       
        // upscroll code
        // if you scroll up at all display none
  if(!this.isScrollup) {

    this.NavbarEl.className = 'd-none'





    this.isScrollup = true;
  }


       
// if you scroll down measure it and get enough sensitivity before you brig it down
      } else if (st - this.lastScrollTop <=-10) {
        // downscroll code
        if (this.isScrollup) {


          this.NavbarEl.className = 'd-block nav-bar-fixed animated slideInDown'


          this.isScrollup = false;
        }
      }
      this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);


  }
  logout = () => {

    this.props.logout()
    window.location.href = 'https://muve.com.ng/'

  }
    render() {
        return (
          <div id="NavBar">
         
            <div className="border-bottom-light ">
              
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
                      />
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <img alt="search" src="/assets/icons/search.svg" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div  className="col-2 p-0 col-md-2 col-lg-4 text-right pointer">
                    <div className='profile-container'>
                      <img
                        alt="profile image"
                        src="/assets/images/user.svg"
                        className="profile-img mr-1"
                      />

                      <div className='bg-light rounded border pb-3 pt-3 morenav'>
                        <div className='text-right pr-3 pl-3'>
                        - {this.props.userData.full_name}
  </div>                       


                        <ul className="navbar-nav">
                          <li className="nav-item text-left pr-3 pl-3">
                            <a className="nav-link">Home <span className="sr-only"></span></a>
                          </li>
                          <li className="nav-item text-left pr-3 pl-3">
                            <a className="nav-link">Profile<span className="sr-only"></span></a>
                          </li>
                          <li onClick={this.logout} className="nav-item text-left pr-3 pl-3 bg-danger text-white">
                            <a className="nav-link">Logout<span className="sr-only"></span></a>
                          </li>
                        </ul>


                      </div>

                    </div>
                   
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
              <NavLink activeClassName="active-nav" to="/auth/cash-withdraw">
                <div className="d-inline-block v-align-top p-3  each-nav">
                  <span className="img-icon mr-3">
                    <CreditCard />
                  </span>
                  <span className="each-nav-text">Cash Withdraw</span>
                </div>
              </NavLink>
              <NavLink activeClassName="active-nav" to="/auth/Wallet">
                <div className="d-inline-block v-align-top p-3  each-nav">
                  <span className="img-icon mr-3">
                    <Briefcase />
                  </span>
                  <span className="each-nav-text">Wallet</span>
                </div>
              </NavLink>
            </div>
          </div>
        )
    }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps,{logout})(Navbar)
