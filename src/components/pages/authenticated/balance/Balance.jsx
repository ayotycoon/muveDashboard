import React, { Component } from "react";
import "./Balance.scss";

import { Circle } from "react-feather";
import { Link } from 'react-router-dom';

export default class Balance extends Component {


  render() {
    return (

      <div id="balance">
        <div className="container mt-3">
          <h2><b className="text-header">Balance</b></h2>
          <br></br>
          <div className="text-right">
            <Link to="/auth/balance/refill" className="btn btn-lg btn-primary">Refill</Link>
          </div>
          </div>
        </div>

    )
  }
}
