import React, { Component } from 'react'
import './ManageCards.scss'
import { ArrowLeft, Plus, X } from 'react-feather';
import { Link } from 'react-router-dom';

export default class ManageCards extends Component {

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


            <div id="manage_cards">
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
                    <img src="/assets/ill/card.svg" />
                    <br />
                    <br />
                    <br />
                    <h2>


                        <b className="text-header">Card successfully added</b></h2>

                    <div className="text-muted">Your card has been successfully verified and added for all subsequent transactions</div>
                    <div className="text-center mt-2">
                        <Link to='/auth/wallet/refill'> <button  className="btn btn-lg btn-primary"> Return to Refill Wallet</button></Link>
                    </div>
                
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

                    <b className="ml-5 text-header">Manage Cards</b></h2>
                <br></br>
                <br></br>
           

                <div className="row text-muted">

                    <div className="col-md-5  mt-2">
                        <b>Delete</b>
                        <br />
                      


                        </div>
                    <div className="col-md-7  mt-2">
                    <div className="scrollable-row">
                     
                     <this.Cards />


                    </div>
                    </div>
                </div>

                < br />

                <div className="row text-muted">

                    <div className="col-md-5  mt-2">
                        <b>New Card</b>
                        <br />
                        <br />
                


                        </div>
                    <div className="col-md-7  mt-2">
                        <ul>
                            <li className='text-primary note-list-li'> <span className='text-muted inner'>Your new card will be saved for future transactions after it is verified</span></li>
                            <li className='text-primary note-list-li'> <span className='text-muted inner'>The verification ammount will be credited in your wallet</span></li>
                            <li className='text-primary note-list-li'> <span className='text-muted inner'>Please be informed that the minimum amount for verification is N60</span></li>
                        </ul>
                        <br />
                        <input value={this.state.data.cashAmount} onChange={(e) => this.setState({ data: { ...this.state.data, cashAmount: e.target.value } })} type="number" className="form-control pt-2 pb-2" />
                        <br />


                    </div>
                </div>

                
                <div className="text-right">
                    <button onClick={() => this.setState({ status: 'success' })} className="btn btn-lg btn-primary"> Add new Card</button>
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
