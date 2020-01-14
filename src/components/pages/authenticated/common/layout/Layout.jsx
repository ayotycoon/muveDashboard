import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import Dashboard from '../../dashboard/Dashboard';
import CashWithdraw from "../../cash_withdraw/CashWithdraw";
import NewCashWithdraw from "../../cash_withdraw/components/new_cash_withdraw/NewCashWithdraw";

import {
  Route,
  Redirect
} from "react-router-dom";
import Wallet from '../../wallet/Wallet';
import WalletRefill from '../../wallet/components/wallet_refill/WalletRefill';
import CashWithdrawDoorstep from '../../cash_withdraw/components/cash_withdraw_doorstep/CashWithdrawDoorstep';
import CashWithdrawPickup from '../../cash_withdraw/components/cash_withdraw_pickup/CashWithdrawPickup';


import { fetchUserData } from '../../../../../store/actions/userData.action'
import { connect } from 'react-redux'
import { onlyAuth } from '../../../../common/helper.service';
import { __fetchUserData } from '../../../../../providers/auth.service'

import './Layout.scss'
import ManageCards from '../../wallet/components/manage-cards/ManageCards';



class Layout extends Component {
  componentWillMount() {   
    onlyAuth(this.props)
    __fetchUserData().then(data => {
      this.props.fetchUserData(data);
    })



  }


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
        <Route exact path="/auth/cash-withdraw" component={CashWithdraw} />
        <Route exact path="/auth/cash-withdraw/new" component={NewCashWithdraw} />
        <Route exact path="/auth/cash-withdraw/new/doorstep" component={CashWithdrawDoorstep} />
        <Route exact path="/auth/cash-withdraw/new/pickup" component={CashWithdrawPickup} />
        <Route exact path="/auth/Wallet" component={Wallet} />
        <Route exact path="/auth/Wallet/refill" component={WalletRefill} />
        <Route exact path="/auth/Wallet/refill/manage-cards" component={ManageCards} />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, { fetchUserData })(Layout)