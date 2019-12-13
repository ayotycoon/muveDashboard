import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import Dashboard from '../../dashboard/Dashboard';
import CashCall from "../../cash_call/CashCall";
import NewCashCall from "../../new_cash_call/NewCashCall";

import {

  Route,
  Redirect
} from "react-router-dom";
import Balance from '../../balance/Balance';
import BalanceRefill from '../../balance_refill/BalanceRefill';


export default class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/** this nav shows while you scroll */}
        <div id="NavBar-scroll" style={{display: 'none'}}>
          <Navbar />
        </div>

       {/* <Redirect exact path="/auth" to="/auth/dashboard" />*/}
        <Route exact path="/auth/dashboard" component={Dashboard} />
        <Route exact path="/auth/cashcall" component={CashCall} />
        <Route exact path="/auth/cashcall/new" component={NewCashCall} />
        <Route exact path="/auth/balance" component={Balance} />
        <Route exact path="/auth/balance/refill" component={BalanceRefill} />
      </div>
    )
  }
}
