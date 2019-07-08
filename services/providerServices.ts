import axios from 'axios'
import * as apiUrls from './apiUrls'


let addServices = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.providerServicesUrl,
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

let getProviderServices = (id) => {
    let id_ = ''
    id ? id_ = id : id_ = '5d1bb151f451bc0004d30594'
    return axios({
        method: 'GET',
        url: apiUrls.providerServicesUrl+'/'+id_
    })
}

let getProviderBookings = (token) => {
    return axios({
        method: 'GET',
        url: apiUrls.providerBookingUrl,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    })
}

let getProviderDetails = (id) => {
    return axios({
        method: 'GET',
        url: apiUrls.providersDetailsUrl+'/'+id
    })
}

let getProviderReviews = (id) => {
    return axios({
        method: 'GET',
        url: apiUrls.reviewsUrl+'/'+id
    })
}

export {
    addServices,
    getProviderServices,
    getProviderBookings,
    getProviderDetails,
    getProviderReviews
}