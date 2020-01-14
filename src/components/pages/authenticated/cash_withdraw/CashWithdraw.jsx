import React, { Component } from 'react'
import './CashWithdraw.scss'

import  {ArrowLeft, ArrowRight, User} from 'react-feather';
import {Link} from 'react-router-dom';
export default class CashWithdraw extends Component {

 

    render() {
        return (

            <div id="cash_call">
                <div className="container mt-3">
                    <h2><b className="text-header">Cash Withdraw List</b></h2>
                    <br></br>
                    <div className="text-right">
                        <Link to="/auth/cash-withdraw/new" className="btn btn-lg btn-primary text-white">New  Withdraw</Link>
                    </div>

                </div>
            </div>

        )
    }
}
