import { Loader } from "react-feather";
import React, { Component } from 'react';

export default class LoaderC extends Component {
    render() {
        return (
            <span className='spinner'>
                <Loader />
            </span>
        )
    }
}
// .spinner