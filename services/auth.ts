import axios from 'axios'
import * as apiUrls from './apiUrls'

let login = (data) => {
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded"
        // "observe": "response"
    };
    return axios({
        method: 'POST',
        url: apiUrls.login,
        data: data,
        headers: headers
    })
}

export {
    login
}