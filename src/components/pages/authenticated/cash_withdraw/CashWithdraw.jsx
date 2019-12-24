import React, { Component } from 'react'
import './CashWithdraw.scss'

import  {ArrowLeft, ArrowRight, User} from 'react-feather';
import {Link} from 'react-router-dom';
export default class CashWithdraw extends Component {

    lists = [2, 2, 2, 2, 2, 2, 2];
    paginates = [1,2,3,4,5,6,7];

    render() {
        return (

            <div id="cash_call">
                <div className="container mt-3">
                    <h2><b className="text-header">Cash Withdraw List</b></h2>
                    <br></br>
                    <div className="text-right">
                        <Link to="/auth/cash-withdraw/new" className="btn btn-lg btn-primary text-white">New  Withdraw</Link>
                    </div>

                    <div className="row text-muted">
                        <div className="col-md-6 col-lg-3 mt-2">
                            Filter By
                            <br></br>
                            <select className="form-control input-big border mt-1 text-muted">
                                <option>Select</option>
                            </select>

                        </div>
                        <div className="col-md-6 col-lg-3 mt-2">
                            Sort By
                            <br></br>
                            <select className="form-control input-big border mt-1 text-muted">
                                <option>Select</option>
                            </select>

                        </div>
                        <div className="col-md-12 col-lg-6 mt-2">
                            <span style={{ visibility: 'hidden' }}>F</span>
                            <br></br>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control input-big"
                                    placeholder="Search recent Cash Withdraws"

                                />
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <img alt="search" src="/assets/icons/search.svg" />
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <br />

                    {this.lists.map((list, index) => {
                        return (
                            <div key={index} className="row border mt-2">
                                <div className="col-md-6 col-lg-6 mt-1 mb-1">
                                    <div className=" rounded p-2 pr-3 pl-3 mt-1 mb-1">
                                        <div className="row">
                                            <div className="col-8 p-0">
                                                <span className="text-default">
                                                    Ref - 384793792873
                              </span>
                                                <br></br>
                                                <span className="text-muted d-block mt-1 mb-1">
                                                    19th Nov 2019 at 12:40
                              </span>
                                            </div>
                                            <div style={{fontSize: '1.5em'}} className="col-4 pr-0 each-list-price">
                                                ₦ 10,000
                                            </div>
                                        </div>

                                    </div>
                                    </div>
                        
                                <div className="col-md-12 col-lg-6 mt-1 mb-1">
                                    <div className=" rounded mt-1 mb-1">
                                        <div className="row">
                                            <div className="col-9 p-0">
                                                <div className=" mt-1" style={{ backgroundColor: '#f5f6f9', height: '60px', borderRadius: '30px'}}>
                                                    <div className="text-center">
                                                        <img alt="arrow" className="d-inline-box mt-3" style={{width:'15px'}} src="/assets/icons/angle-right.svg" />
                                                       

                                                        <div className="d-inline-box mt-1 ml-2 bg-white text-muted pt-2" style={{ width: '50px', height: '50px', borderRadius: '50%', float: 'left'}} >
                                                           <User size="30" />
                                                            </div>

                                                        <img
                                                            alt="profile image"
                                                            style={{ width: '50px', height: '50px', borderRadius: '50%', float: 'right' }}
                                                            src="/assets/images/user.svg"
                                                            className="profile-img  float-right mt-1 mr-2"
                                                        />
                                                       
                                                       
                                                        </div>

                                                   </div>
                                            </div>
                                            <div className="col-3 pt-2">
                                                <div className="box-container">
                                                    <div className="d-inline-block box bg-primary-light">
                                                        <div className="inner-box bg-primary"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    </div>

                                </div>
                
                        )
                    })}
                    <br />
                    <br />
                    <div className="text-right text-muted">
                        <ArrowLeft />
                    {this.paginates.map((paginate, index)=>{
                        return (
                            <span key={index} className="mr-3 ml-3">
                                {paginate}
                            </span>

                        )
                        })}
                        <ArrowRight />
                        </div>
                    <br />
                    <br />
                </div>
            </div>

        )
    }
}
