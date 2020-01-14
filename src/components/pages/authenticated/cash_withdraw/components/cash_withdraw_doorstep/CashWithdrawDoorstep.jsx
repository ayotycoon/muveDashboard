import React, { Component } from 'react'
import './CashWithdrawDoorstep.scss'
import { ArrowLeft, Plus, X } from 'react-feather';
import { Link } from 'react-router-dom';

import Back from '../../../common/back/Back'
export default class CashWithdrawDoorstep extends Component {

    state = {
        status: 'await', // loading | danger | success | 
        showModal: false,
        data: {
            cashAmount: 1000,
            selectedAddressIndex: 0,
        },
        user: {
            addresses: [
                { address: '12, ibsdsd, street', city: 'Ikejs', state: 'Lagos State', selected: true },
                { address: '20, ygsgsyasgas, street', city: 'Asaba', state: 'Delta State', selected: false }
            ]
        }
    }


    addAddress = () => {
        if (!this.state.showModal) {
            this.setState({ showModal: true })
            return;
        }

        this.setState({ showModal: false })



    }
    chooseAddress = (index) => {
        /**local copy of address */
        const addresses = [...this.state.user.addresses]
        /** Set previous address to false */
        addresses[this.state.data.selectedAddressIndex].selected = false;
/** Set new address to true */
        addresses[index].selected = true;
    /** Set new index */
        this.state.data.selectedAddressIndex = index;
        
        this.setState({ user: { ...this.state.user, addresses } })
    }



    render() {



  




        return (


            <div id="cash_withdraw_delivery">
                {this.state.status === 'await' ? <this.Await /> : ''}
                {this.state.status === 'success' ? <this.Success /> : ''}
                {this.state.status === 'fail' ? <this.Fail /> : ''}
            </div>
        )
    }
    // commponents
    Addresses = (props) => {
        return this.state.user.addresses.map((address, index) => {
            const addressClass = 'global-card   border p-3 m-2 rounded text-default';

            return (
                <div key={index} onClick={() => this.chooseAddress(index)} className={address.selected ? addressClass + ' border-primary' : addressClass}>
                    {address.address}

                    <br></br>
                    <br></br>
                    <b>{address.city}</b>
                    <br></br>
                    <br></br>
                    <b>{address.state}</b>
                    <br></br>
                    <br></br>


                </div>)

        })



    }
    Modal = (props) => {
        if (!this.state.showModal) {
            return '';
        }
        return (
            <div className="modal-cus animated fadeIn">
                <div className="inner bg-white p-5 animated slideInRight">
                    <div >
                        <span onClick={this.addAddress} className="float-right cursor"> <X /></span>
                        <h2><b className="text-header">New Address</b></h2>


                    </div>



                    <div className="pt-5 text-muted">
                        Address
    <br />
                        <textarea style={{ height: '100px' }} className="border form-control mt-2">

                        </textarea>
                    </div>

                    <div className="pt-4 text-muted">
                        Area
    <br />
                        <select className="border text-muted form-control mt-2">

                        </select>
                    </div>
                    <div className="pt-4 text-muted">
                        State
    <br />
                        <select className="border text-muted form-control mt-2">

                        </select>
                    </div>
                    <br></br>
                    <div className="text-right">
                        <button to="/auth/cashcall/new" className="btn btn-lg btn-primary">Create New Address</button>
                    </div>

                </div>
            </div>

        )

    }
    Await = () => {
        return (
            <div>
                <this.Modal />
                <div className="container mt-3">
                    <h2>
                       <Back />

                        <b className="ml-5 text-header">Doorstep Delivery</b></h2>
                    <br></br>
                    <br></br>


                    <div className="row text-muted">

                        <div className="col-md-5  mt-2">
                            <b>Enter Cash Amount</b>
                            <br />
                            <br />
                            All cash amount must be in denomination of ₦ 1000


                        </div>
                        <div className="col-md-7  mt-2">
                            <input value={this.state.data.cashAmount} onChange={(e) => this.setState({ data: { ...this.state.data, cashAmount: e.target.value } })} type="number" className="form-control pt-2 pb-2" />
                            <br />

                            <div className="row">
                                <div className="col-4 pl-0 mt-2">
                                    <button onClick={() => this.setState({ data: { ...this.state.data, cashAmount: 1000 } })} className="pt-2 pb-2 btn btn-block bg-white text-muted border font-weight-bold">
                                        ₦ 1000
                            </button>
                                </div>
                                <div className="col-4 pl-0 pr-0 mt-2">
                                    <button onClick={() => this.setState({ data: { ...this.state.data, cashAmount: 2000 } })} className="pt-2 pb-2 btn btn-block bg-white text-muted border font-weight-bold">
                                        ₦ 2000
                            </button>
                                </div>
                                <div className="col-4 pr-0 mt-2">
                                    {" "}
                                    <button onClick={() => this.setState({ data: { ...this.state.data, cashAmount: 4000 } })} className="pt-2 pb-2 btn btn-block bg-white text-muted border font-weight-bold">
                                        ₦ 4000
                            </button>
                                </div>
                                <div className="col-4 pl-0 mt-2">
                                    <button onClick={() => this.setState({ data: { ...this.state.data, cashAmount: 8000 } })} className="pt-2 pb-2 btn btn-block bg-white text-muted border font-weight-bold">
                                        ₦ 8000
                            </button>
                                </div>
                                <div className="col-4 pl-0 pr-0 mt-2">
                                    <button onClick={() => this.setState({ data: { ...this.state.data, cashAmount: 16000 } })} className="pt-2 pb-2 btn btn-block bg-white text-muted border font-weight-bold">
                                        ₦ 16000
                            </button>
                                </div>
                                <div className="col-4 pr-0 mt-2">
                                    {" "}
                                    <button onClick={() => this.setState({ data: { ...this.state.data, cashAmount: 32000 } })} className="pt-2 pb-2 btn btn-block bg-white text-muted border font-weight-bold">
                                        ₦ 32000
                            </button>
                                </div>
                            </div>


                        </div>
                    </div>
                    <br />
                    <br />

                    <div className="row text-muted">

                        <div className="col-md-5  mt-2">
                            <b>Select Address</b>
                            <br />
                            <br />
                            Select existng address or Create a new one


                        </div>
                        <div className="col-md-7  mt-2">


                            <div className="scrollable-row">
                                <div onClick={this.addAddress} className="global-card   border p-3 m-2 rounded  text-center">

                                    <b>Create New Address</b>
                                    <br></br>

                                    <div className="border d-inline-block mt-2" style={{ borderRadius: '50%', width: '100px', paddingTop: '25px', height: '100px' }}>

                                        <Plus size="40" />
                                    </div>






                                </div>



                                <this.Addresses />





                            </div>


                        </div>
                    </div>

                    <br></br>
                    <div className="text-right">
                        <button onClick={() => this.setState({ status: 'success' })} className="btn btn-lg btn-primary">Make Order</button>
                    </div>
                    <br />
                </div>

            </div>
        )
    }
    Success = () => {

        return (
            <div className="text-center" >
                <div className="d-inline-block" style={{ width: '300px' }}>
                    <img src="/assets/ill/success-cashcall.svg" />
                    <br />
                    <br />
                    <br />
                    <h2>


                        <b className="text-header">Cash Withdraw  Successful</b></h2>

                    <div className="text-muted">Hurray! We are delivering your cash to you in a jiffy</div>
                </div>
                <br></br>
                <br></br>
                <Back innerHTML={' <button  class="btn btn-lg btn-outline-primary mr-2 ml-2 mt-2">Return to Cash Withdraw List</button>'} />
               
                <button className="btn btn-lg btn-primary mr-2 ml-2 mt-2">View Cash Withdraw detail</button>

            </div>

        )
    }
    Fail = () => {

        return 'fail'
    }

}
