import axios from 'axios'
import * as apiUrls from './apiUrls'


let addServices = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.addServicesUrl,
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

let editService = (data, id) => {
    return axios({
        method: 'POST',
        url: apiUrls.providerServicesUrl+'/'+id,
        data: data
    })
}

let getProviderServices = (id) => {
    return axios({
        method: 'GET',
        url: apiUrls.providerServicesUrl+'/'+id
    })
}

let deleteProviderServices = (id) => {
    return axios({
        method: 'DELETE',
        url: apiUrls.providerServicesUrl+'/'+id
    })
}

let getProviderPublicServices = (id) => {
    return axios({
        method: 'GET',
        url: apiUrls.providerPublicServicesUrl+'/'+id
    })
}

let getProviderBookings = () => {
    return axios({
        method: 'GET',
        url: apiUrls.providerBookingUrl,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

let getAllBookings = () => {
    return axios({
        method: 'GET',
        url: apiUrls.getAllBookings
    })
}

let getProviderSchedule = (id) => {
    return axios({
        method: 'GET',
        url: apiUrls.providerSchedule+'/'+id
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


let getLookbook = (id) => {
    return axios({
        method: 'GET',
        url: apiUrls.lookbookUrl+'/'+id
    })
}


let addLookbook = (id, data) => {
    return axios({
        method: 'POST',
        url: apiUrls.addLookbookUrl+'/'+id,
        data
    })
}

let deleteLookbook = (id) => {
    return axios({
        method: 'DELETE',
        url: apiUrls.lookbookUrl+'/'+id
    })
}

let providerSubscribe = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.providerSubscription,
        data
    })
}


let getSubscriptions = () => {
    return axios({
        method: 'GET',
        url: apiUrls.subscriptionsUrl
    })
}

let addSubscription = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.subscriptionsUrl,
        data
    })
}

let deleteSubscription = (id) => {
    return axios({
        method: 'DELETE',
        url: apiUrls.subscriptionsUrl+'/'+id
    })
}

let getBills = () => {
    return axios({
        method: 'GET',
        url: apiUrls.getBills
    })
}

let getBankAccts = () => {
    return axios({
        method: 'GET',
        url: apiUrls.providerBankUrl
    })
}

let addBankAccts = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.providerBankUrl,
        data
    })
}

export {
    addServices,
    editService,
    getProviderPublicServices,
    getProviderServices,
    deleteProviderServices,
    getProviderBookings,
    getAllBookings,
    getProviderSchedule,
    getProviderDetails,
    getProviderReviews,
    getLookbook,
    addLookbook,
    deleteLookbook,
    providerSubscribe,
    getSubscriptions,
    addSubscription,
    deleteSubscription,
    getBills,
    getBankAccts,
    addBankAccts
}