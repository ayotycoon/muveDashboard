import axios from 'axios'
import { alerter, isjwtValid } from '../components/common/helper.service'
import {store} from '../store'
import { loading } from '../store/actions/network.action'

const domain = 'https://api.muve.com.ng' // http://localhost:8000
const headers = { 'Authorization': `Bearer ${isjwtValid().token}` }


export const __login = (data) => {


    return new Promise((resolve, reject) => {
        request()

        axios.post(`${domain}/api/token/`, data, headers)
            .then(res => {
                response(true)
                resolve({ token: res.data.access })
                localStorage.setItem("__token__", res.data.access)


            })
            .catch(err => response(false,err))
    })

}
export const __register = (data) => {


    return new Promise((resolve, reject) => {
        request()

        axios.post(`${domain}/register/`, data, headers)
            .then(res => {

                resolve({ token: res.data.access })
            })
            .catch(err => response(false,err))
    })

}
export const __fetchUserData = () => {

    return new Promise((resolve, reject) => {
        request()

        resolve({ full_name: 'ayo' })
    })

}

const requestError = (err) => {
    let error;
    try {
        error = err.response.data.detail
    } catch (error) {
    }
    const msg = { error: error || err.message }
    alerter(msg.error, 'danger')

}
const response = (isSuccess, res) => {

    store.dispatch(loading(false))
    if (!isSuccess) {
        requestError(res)
    }

}
const request = () => {
    store.dispatch(loading(true))



}
