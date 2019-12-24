import React, { Component } from 'react'
import { ArrowLeft, Plus, X } from 'react-feather';


export default class Layout extends Component {
  constructor(props) {
    super(props) 
  }
  back = () => {
    window.history.back()
  }
  render() {
    return (
      <span onClick={this.back} to="/auth/cash-withdraw" className="text-muted pointer"> {this.props.innerHTML ? <span dangerouslySetInnerHTML={{ __html: this.props.innerHTML }}></span> : <ArrowLeft />}</span>
    )
  }
}
