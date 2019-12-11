import React, { Component } from 'react'
import './BalanceRefill.scss'
import { ArrowLeft, Plus, X } from 'react-feather';
import { Link } from 'react-router-dom';

export default class BalanceRefill extends Component {

    state = {
        status: 'await', // loading | danger | success | 
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



    render() {

        

        return (


            <div id="balance_refill">
                <div className="container mt-3">
                
                {this.state.status === 'await' ? <this.Await /> : ''}
                {this.state.status === 'success' ? <this.Success /> : ''}
                {this.state.status === 'fail' ? <this.Fail /> : ''}
</div>
            </div>
        )
    }
    Success = () => {

        return (
            <div className="text-center" >
                <div className="d-inline-block" style={{ width: '300px' }}>
                    <img src="/assets/ill/success-refill.svg" />
                    <br />
                    <br />
                    <br />
                    <h2>


                        <b className="text-header">Refill Successful</b></h2>

                    <div className="text-muted">You have successfully refilled your wallet from your bank account</div>
                </div>
            </div>
        )
    }
    Fail = () => {

        return 'fail'
    }
    Await = () => {

        return (

            <div >
                <h2>
                    <Link to="/auth/balance" className="text-muted"><ArrowLeft /></Link>

                    <b className="ml-5 text-header">Refill wallet</b></h2>
                <br></br>
                <br></br>


                <div className="row text-muted">

                    <div className="col-md-5  mt-2">
                        <b>Enter Amount</b>
                        <br />
                        <br />
                        The entered amount will be withdrawn from your bank account


                        </div>
                    <div className="col-md-7  mt-2">
                        <input value={this.state.data.cashAmount} onChange={(e) => this.setState({ data: { ...this.state.data, cashAmount: e.target.value } })} type="number" className="form-control pt-2 pb-2" />
                        <br />


                    </div>
                </div>

                <div className="text-right">
                    <button onClick={() => this.setState({ status: 'success' })} className="btn btn-lg btn-primary">Proceed to payment Portal</button>
                </div>
                <br />
            </div>

        )
    }

}
