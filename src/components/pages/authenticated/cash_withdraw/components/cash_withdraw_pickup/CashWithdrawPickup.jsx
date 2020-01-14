import React, { Component } from 'react'
import './CashWithdrawPickup.scss'
import { User } from 'react-feather';
import { scrollToTop } from '../../../../../common/helper.service'

import Back from '../../../common/back/Back'
export default class CashWithdrawPickup extends Component {

    state = {
        step: 1,
        agents: [1, 2, 3, 4, 5, 6],
        selectedAgent: 0,
        data: {
            cashAmount: ''
        }
    }

    continue = (n) => {
        const next = this.state.step + n
        this.setState({ step: next }, scrollToTop)
    }
    render() {

        return (
            <div id="cash_withdraw_pickup">
                <div className="container mt-3">
                    <h2>
                        <Back />

                        <b className="ml-5 text-header">Cash Pickup</b></h2>


                    <div className='text-center'>
                        <div className='d-inline-block step-container border-bottom' >

                            <div className='d-inline-block bg-white each-step'>
                                <div className={this.state.step === 1 ? 'step bg-primary-light' : 'step'}>
                                    <div className={this.state.step === 1 ? 'd-inline-block step-inner bg-primary' : 'd-inline-block step-inner'}>

                                    </div>
                                </div>
                            </div>
                            <div className='d-inline-block bg-white each-step'>
                                <div className={this.state.step === 2 ? 'step bg-primary-light' : 'step'}>
                                    <div className={this.state.step === 2 ? 'd-inline-block step-inner bg-primary' : 'd-inline-block step-inner'}>

                                    </div>
                                </div>
                            </div>
                            <div className='d-inline-block bg-white each-step'>
                                <div className={this.state.step === 3 ? 'step bg-primary-light' : 'step'}>
                                    <div className={this.state.step === 3 ? 'd-inline-block step-inner bg-primary' : 'd-inline-block step-inner'}>

                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>
                    <br></br>
                    <br></br>

                    <div className='text-muted'>
                        {this.state.step === 1 ? <this.Step1 /> : ''}
                        {this.state.step === 2 ? <this.Step2 /> : ''}
                        {this.state.step === 3 ? <this.Step3 /> : ''}

                        <br></br>
                        <div className='row'>
                            <div className="col-6 p-0">
                                {this.state.step > 1 && this.state.step < 3 ? <button onClick={() => this.continue(-1)} className="btn btn-lg btn-outline-primary">Previous</button> : ''}

                            </div>
                            <div className="col-6 p-0 text-right">
                                {this.state.step < 3 ? <button onClick={() => this.continue(1)} className="btn btn-lg btn-primary">Continue</button> : ''}

                            </div>
                        </div>
                        <br />
                    </div>

                </div>
            </div>
        )



    }
    Step1 = () => {

        return (
            <div>
                <div className="row mb-3">
                    <div className='col-md-5 mt-2'>

                        <button className='btn btn-sm btn-outline-secondary'>
                            Step {this.state.step}
                        </button>

                    </div>
                    <div className='col-md-7 mt-2'>
                        <ul>
                            <li className='text-primary note-list-li'> <span className='text-muted inner'>All pickups attract a fee of 7000</span></li>
                            <li className='text-primary note-list-li'> <span className='text-muted inner'>Please, ensure the amount bwing entered ( in addition to the transaction fee ) is <b>at least equal</b> to the amount in your wallet</span></li>
                            <li className='text-primary note-list-li'> <span className='text-muted inner'>Insufficient funds in your wallet could hinder the progress of your transaction</span></li>
                        </ul>
                    </div>
                </div>
                <div className="row mb-3">

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
                <div className="row mb-3">

                    <div className="col-md-5  mt-2">
                        <b>Select Location</b>
                        <br />
                        <br />
                        Please turn on your <b>locator</b> when prompted to do so.


                        </div>
                    <div className="col-md-7  mt-2">
                        <input placeholder='turn on your locator' onChange={(e) => this.setState({ data: { ...this.state.data, cashAmount: e.target.value } })} type="number" className="form-control pt-2 pb-2" />

                    </div>
                </div>


            </div>
        )
    }
    Step2 = () => {

        return (
            <div>
                <div className="row mb-3">
                    <div className='col-md-5 mt-2'>

                        <button className='btn btn-sm btn-outline-secondary'>
                            Step {this.state.step}
                        </button>

                    </div>


                    <div className='col-md-7 mt-2'>
                        <ul>
                            <li className='text-primary note-list-li'> <span className='text-muted inner'>Agents are listed starting with the one closest to you</span></li>
                        </ul>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-5  mt-2">
                        <b>Pickup Agents</b>
                        <br />
                        <br />
                        Select a pickup agent closest to you


                        </div>





                    <div className='col-md-7 mt-2'>


                        {this.state.agents.map((agent, index) => {
                            return (
                                <div key={index} className={this.state.selectedAgent === index ? "p-4 border border-primary rounded mt-3" : 'p-4 border rounded mt-3'}>
                                    <div onClick={() => this.setState({ selectedAgent: index })} style={{ borderRadius: '30px' }}>
                                        <div className="row">



                                            <div className="col-md-6" >

                                                <User size="30" />

                                                <span className='ml-2'>Agent 123456789</span>
                                            </div>


                                            <div

                                                className="col-md-6 text-right"> <span className='text-primary'>10.456km  </span>from you</div>


                                        </div>

                                    </div>
                                </div>
                            )
                        })}

                        <br />
                        <button className='btn btn-lg btn-block btn-outline-primary'>
                            Load More
                            </button>





                    </div>
                </div>


            </div>
        )
    }
    Step3 = () => {

        return (
            <div>
                <div className="row mb-3">
                    <div className='col-md-5 mt-2'>

                        <button className='btn btn-sm btn-outline-secondary'>
                            Step {this.state.step}
                        </button>

                    </div>
                    <div className='col-md-7 mt-2'>
                        <ul>
                            <li className='text-primary note-list-li'> <span className='text-muted inner'>The address of your selected agent will be displayed when he/she has confirmed the selection</span></li>
                        </ul>
                    </div>
                </div>
                <div className='pt-5 text-center'>
                    <img style={{maxWidth: '150px'}} src='/assets/ill/wifi1.svg' />
                    <br></br>
                    <br></br>
                    <b>0.55</b>
                    <br></br>
                    Please wait while <b>Agent 232232323</b> confirms your selection
               </div>
            </div>
        )
    }
}
