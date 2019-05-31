import axios from 'axios'
import * as apiUrls from './apiUrls'

let clientRegister = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.clientRegister,
        data: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
}

export {
    clientRegister
}