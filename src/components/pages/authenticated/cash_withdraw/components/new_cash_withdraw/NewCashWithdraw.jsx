import React, { Component } from 'react'
import './NewCashWithdraw.scss'
import { ArrowLeft, Plus, X } from 'react-feather';
import { Link } from 'react-router-dom';

import Back from '../../../common/back/Back'
export default class NewCashWithdraw extends Component {


    render() {


        return (


            <div id="new_cash_withdraw">
                <div>
                    <div className="container mt-3">
                        <h2>
                            <Back />

                            <b className="ml-5 text-header">New Cash Withdraw</b>
                        </h2>
                        <br></br>


                        <div className="row text-muted">

                            <div className="col-md-12 col-lg-4 mt-4">
                                <b>Cash Withdrawal Type</b>
                                <br />
                                <br />
                                Choose Preferrable method of getting your cash


                        </div>
                            <Link to='/auth/cash-withdraw/new/pickup' className=" col-md-6 col-lg-4 mt-4 ">

                                <div className=' border rounded p-3 h-100'>
                               <div className='d-inline-block' style={{width: '35%'}}>
                                        <img src='/assets/ill/cash-pickup.svg' />
                               </div>
                                    <div className='d-inline-block v-align-top' style={{width: '65%'}}>
                                        <b>Cash Pickup</b>
                                        <br />
                                        <br />
                                Pick your cash from an agent nearest to you
            
        
                               </div>
                                </div>
                               

                        </Link>
                            <Link to='/auth/cash-withdraw/new/doorstep' className=" col-md-6 col-lg-4 mt-4 ">

                                <div className=' border rounded p-3 h-100'>
                               <div className='d-inline-block' style={{width: '35%'}}>
                                        <img src='/assets/ill/doorstep-delivery.svg' />
                               </div>
                                    <div className='d-inline-block v-align-top' style={{width: '65%'}}>
                                        <b>Doorstep Delivery</b>
                                        <br />
                                        <br />
                               Have your cash being delivered to you at your doorstep
            
        
                               </div>
                                </div>
                               

                        </Link>
                        </div>
                        <br />
                        <br />


                    </div>

                </div>

            </div>
        )
    }


}
