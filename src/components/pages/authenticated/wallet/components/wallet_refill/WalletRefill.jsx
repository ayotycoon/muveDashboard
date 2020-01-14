import React, { Component } from 'react'
import './WalletRefill.scss'
import { ArrowLeft, Plus, X } from 'react-feather';
import { Link } from 'react-router-dom';

export default class WalletRefill extends Component {

    state = {
        status: 'await', // loading | danger | success | 
        data: {
            cashAmount: 1000,
            selectedAddressIndex: 0,
        },
        user: {
            cards: [
                { type: '', number: '', expires: '', selected: true },
                { type: '', number: '', expires: '', selected: false }
            ]
        }
    }



    render() {

        

        return (


            <div id="Wallet_refill">
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
                    <Link to="/auth/Wallet" className="text-muted"><ArrowLeft /></Link>

                    <b className="ml-5 text-header">Refill wallet</b></h2>
                <br></br>
                <br></br>
                <div className="text-right">
                    <Link to='/auth/wallet/refill/manage-cards'><button className="btn btn-lg btn-outline-primary"> Manage Cards</button></Link>
                </div>
                <br />

                <div className="row text-muted">

                    <div className="col-md-5  mt-2">
                        <b>Select Card</b>
                        <br />
                      


                        </div>
                    <div className="col-md-7  mt-2">
                    <div className="scrollable-row">
                     
                     <this.Cards />


                    </div>
                    </div>
                </div>

                

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
                    <button onClick={() => this.setState({ status: 'success' })} className="btn btn-lg btn-primary"> Refill Wallet</button>
                </div>
                <br />
            </div>

        )
    }
    Cards = (props) => {
        return this.state.user.cards.map((card, index) => {
            const cardClass = 'global-card atm-card border m-2 rounded text-default';

            return (
                <div key={index} onClick={() => this.chooseCard(index)} className={card.selected ? cardClass + ' border-primary' : cardClass}>
                   <img src='/assets/ill/card.svg' />
                   
                    {card.type}

                    <b>{card.number}</b>
                    <b>{card.expires}</b>


                </div>)

        })



    }

}
