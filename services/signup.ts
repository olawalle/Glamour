import axios from 'axios'
import * as apiUrls from './apiUrls'

let clientRegister = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.clientRegister,
        data: data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

let providerRegister = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.providerRegister,
        data: data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

export {
    clientRegister,
    providerRegister
}