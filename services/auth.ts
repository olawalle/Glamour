import axios from 'axios'
import * as apiUrls from './apiUrls'

let login = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.login,
        data: data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

let getCurrentUser = (token) => {
    return axios({
        method: 'GET',
        url: apiUrls.getCurrentUser,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    })
}

export {
    login,
    getCurrentUser
}