import React, { Component } from 'react';

import { Link } from 'react-router-dom';


export default class Muve extends Component {
    render() {
        return (
            <Link to="/">
            <span id="muve" className="font-weight-bold">
                <span className="text-primary">mu</span>
                <span className="text-secondary">ve</span>
            </span>
            </Link>
        )
    }
}
