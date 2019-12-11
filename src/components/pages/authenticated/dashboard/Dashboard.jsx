import React, { Component } from "react";
import { isElementVisible } from '../../../common/helper.service.js'
import "./Dashboard.scss";

import { Circle } from "react-feather";
export default class Dashboard extends Component {
  recentCalls = [1, 2, 3, 4, 5];
  cards;
  componentDidMount() {
    this.cards = document.querySelectorAll('.global-card');
    this.isCardVisible()
    document.querySelector('.scrollable-row').addEventListener('scroll', e => {
      this.isCardVisible()

    })
  }
  isCardVisible() {
    for (let i = 0; i < this.cards.length; i++) {
      const card = this.cards[i];
      const nav = document.querySelectorAll('.cardNav')[i]

      if (isElementVisible(card, true)) {

        nav.classList.add('circle-active');

      }
      if (!isElementVisible(card, true)) {
        nav.classList.remove('circle-active');


      }

    }
  }

  render() {
    return (

      <div id="dashboard">
        <div className="container mt-3">
          <h2>
            <b className="text-header">Dashboard</b>
          </h2>
          <br></br>

          <div className=" scrollable-row hide-scroll">
            <div className="global-card global-card-primary rounded text-white p-3 m-2">
              <img src="/assets/images/standing.svg" />
              <br></br>
              <br></br>
              <b>Cash Call</b>
              <br></br>
              <span>Get cash delivered to you whereever whenever</span>
              <br></br>
              <button className="btn btn-block btn-lg mt-2 btn-primary">
                Make a call
                </button>
            </div>

            <div className="global-card border rounded  p-3 m-2">
              <div className="row-cus">
                <div className="text-primary global-card-icon">
                  <div className="inner">
                    <span className="img-icon">
                      <Circle size="30" />
                    </span>
                  </div>
                </div>
                <div className="global-card-dis text-muted pr-2 pl-2">
                  <h5 className="mb-0">
                    <b>Cash Call</b>
                  </h5>
                  Calls made during the last weeks
                  </div>
              </div>
              <br></br>
              <div className="text-center">
                <br />
                <h1 className="font-weight-normal">700</h1>
              </div>
            </div>

            <div className="global-card border rounded  p-3 m-2">
              <div className="row-cus">
                <div className="text-primary global-card-icon">
                  <div className="inner">
                    <Circle size="30" />
                  </div>
                </div>
                <div className="global-card-dis text-muted pr-2 pl-2">
                  <h5 className="mb-0">
                    <b>Refills</b>
                  </h5>
                  Wallet refils from bank account
                  </div>
              </div>
              <br></br>
              <div className="text-center">
                <br />
                <h1 className="font-weight-normal">700</h1>
              </div>
            </div>

            <div className="global-card border rounded  p-3 m-2">
              <div className="row-cus">
                <div className="text-primary global-card-icon">
                  <div className="inner">
                    <Circle size="30" />
                  </div>
                </div>
                <div className="global-card-dis text-muted pr-2 pl-2">
                  <h5 className="mb-0">
                    <b>
                      Wallet <br></br> Balance
                      </b>
                  </h5>
                </div>
              </div>
              <br></br>
              <div className="text-center">
                <br />
                <h1 className="font-weight-normal">
                  <small>
                    <sup>₦</sup>
                  </small>
                  100,000
                  </h1>
              </div>
            </div>
          </div>
          <div className="scrollable-row-nav text-center">
            <span className="circle cardNav"></span>
            <span className="circle cardNav"></span>
            <span className="circle cardNav"></span>
            <span className="circle cardNav"></span>


          </div>
          <br />
          <br />
        </div>
        <div className="section2">
          <br />

          <div className="container">
            <div className="row text-muted">
              <div className="col-lg-7 mt-3 ">
                <div className="bg-white rounded  mb-3 p-3 h-100 h-100-overflow">
                  <div className="row">
                    <div className="col-md-5 pl-0">
                      <h5 className="mb-0">
                        <b>Cash Call Stats</b>
                      </h5>

                      <small>
                        {" "}
                        Cash Calls made within a particular period
                        </small>
                    </div>
                    <div className="col-md-7 p-0 text-center">
                      <div className="row">
                        <div className="col-4 pl-0 mt-2">
                          <button className="btn btn-block bg-white text-muted border font-weight-bold">
                            Week
                            </button>
                        </div>
                        <div className="col-4 pl-0 pr-0 mt-2">
                          <button className="btn btn-block bg-white text-muted border font-weight-bold">
                            Month
                            </button>
                        </div>
                        <div className="col-4 pr-0 mt-2">
                          {" "}
                          <button className="btn btn-block bg-white text-muted border font-weight-bold">
                            Year
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div className="p-2">
                    <img src="/assets/ill/chart.svg" alt="chart" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mt-3 ">
                <div className=" bg-white p-3 mb-3 rounded h-100 h-100-overflow">
                  <div className="">
                    <h5 className="mb-0">
                      <b>Recent Calls</b>
                    </h5>

                    <small> List of recently made calls</small>
                  </div>
                  <br />
                  <div className="text-right">
                    <button className="btn btn-lg btn-primary">
                      View more
                      </button>
                  </div>
                  <br />
                  {/*--Recent calls list-*/}
                  {this.recentCalls.map((call, index) => {
                    return (
                      <div
                        key={index}
                        className="border rounded p-2 pr-3 pl-3 mt-2"
                      >
                        <div className="row">
                          <div className="col-9 p-0">
                            <span className="text-default">
                              Ref - 384793792873
                              </span>
                            <br></br>
                            <span className="text-mted d-block mt-2">
                              19th Nov 2019 at 12:40
                              </span>
                          </div>
                          <div className="col-3 pr-0">
                            <div className="box-container">
                              <div className="d-inline-block box bg-primary-light">
                                <div className="inner-box bg-primary"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>

    )
  }
}
