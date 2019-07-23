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
        method: 'PUT',
        url: apiUrls.providerServicesUrl+'/'+id,
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
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

let getProviderBookings = () => {
    return axios({
        method: 'GET',
        url: apiUrls.providerBookingUrl,
        headers: {
            'Content-Type': 'application/json'
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

export {
    addServices,
    editService,
    getProviderServices,
    deleteProviderServices,
    getProviderBookings,
    getProviderDetails,
    getProviderReviews,
    getLookbook,
    addLookbook,
    deleteLookbook,
    providerSubscribe,
    getSubscriptions
}