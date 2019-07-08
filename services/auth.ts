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
    let headers = {}
    token ? headers =  {
        'Content-Type': 'application/json',
        'x-access-token': token
    } : headers = {
        'Content-Type': 'application/json',
    }
    return axios({
        method: 'GET',
        url: apiUrls.getCurrentUser,
        headers
    })
}

let getUserNotifications = (token) => {
    return axios({
        method: 'GET',
        url: apiUrls.getUserNotifications,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    })
}

let getBookings = (token) => {
    return axios({
        method: 'GET',
        url: apiUrls.clientBookingsUrl,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    })
}

let postBookings = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.clientBookingsUrl,
        data
    })
}

let postReviews = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.reviewsUrl,
        data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

let postPayment = (id) => {
    return axios({
        method: 'POST',
        url: apiUrls.payUrl+'/'+id,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

export {
    login,
    getCurrentUser,
    getUserNotifications,
    getBookings,
    postBookings,
    postReviews,
    postPayment
}