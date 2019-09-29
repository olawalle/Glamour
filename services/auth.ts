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


let verify = (token) => {
    return axios({
        method: 'PUT',
        url: apiUrls.activate+'/'+token,
    })
}

let deactivateUser = (id, status) => {
    return axios({
        method: 'PUT',
        data: { status },
        url: apiUrls.disableUser+'/'+id,
    })
}

let changePassword = (data, id) => {
    return axios({
        method: 'PUT',
        url: apiUrls.changePassword,
        data: data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}


let requestReset = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.requestReset,
        data: data
    })
}

let resetPassword = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.resetPassword,
        data: data
    })
}

let getCurrentUser = () => {
    return axios({
        method: 'GET',
        url: apiUrls.getCurrentUser
    })
}


let getStatus = (role) => {
    let url =  role === 'client' ? apiUrls.clientStatusUrl : apiUrls.providerStatusUrl
    return axios({
        method: 'GET',
        url,
        headers: {
            'x-access-token': window.sessionStorage.getItem('glamourToken')
        }
    })
}

let getUserNotifications = () => {
    return axios({
        method: 'GET',
        url: apiUrls.getUserNotifications,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

let getBookings = () => {
    return axios({
        method: 'GET',
        url: apiUrls.clientBookingsUrl
    })
}

let postBookings = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.clientBookingsUrl,
        data
    })
}

let updateStatus = (data, id) => {
    return axios({
        method: 'PUT',
        url: apiUrls.clientBookingsUrl+'/status/'+id,
        data
    })
}

let confirmBookings = (data, id) => {
    return axios({
        method: 'PUT',
        url: apiUrls.clientBookingsUrl+'/confirm-pay/'+id,
        data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
let confirmSubscriptionPayment = (data, id) => {
    return axios({
        method: 'PUT',
        url: apiUrls.confirmSubscription+'/'+id,
        data,
        headers: {
            'Content-Type': 'application/json',
        }
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

let postPayment = (data, id) => {
    return axios({
        method: 'POST',
        url: apiUrls.payUrl+'/'+id,
        data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}


let postSubscriptionPayment = (data, id) => {
    return axios({
        method: 'POST',
        url: apiUrls.subscriptionPayUrl+'/'+id,
        data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

let getSavedProviders = () => {
    return axios({
        method: 'GET',
        url: apiUrls.saveProviders
    })
}

let saveProvider = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.saveProviders,
        data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

let deleteSavedProvider = (id) => {
    return axios({
        method: 'DELETE',
        url: apiUrls.saveProviders+'/'+id
    })
}

let updateClient = (data) => {
    return axios({
        method: 'PUT',
        url: apiUrls.updateClient,
        data: data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

let updateProvider = (data) => {
    return axios({
        method: 'PUT',
        url: apiUrls.updateProvider,
        data: data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

let createConversation = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.createConversationUrl,
        data: data
    })
}

let sendMessage = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.messageUrl,
        data: data
    })
}

let getProviderConversations = (id) => {
    return axios({
        method: 'GET',
        url: apiUrls.providerMessageUrl+'/'+id
    })
}

let getClientConversations = (id) => {
    return axios({
        method: 'GET',
        url: apiUrls.clientMessageUrl+'/'+id
    })
}

let getConversations = (id) => {
    return axios({
        method: 'GET',
        url: apiUrls.messageUrl+'/'+id
    })
}

export {
    login,
    verify,
    deactivateUser,
    getCurrentUser,
    changePassword,
    requestReset,
    resetPassword,
    getUserNotifications,
    getStatus,
    getBookings,
    postBookings,
    postSubscriptionPayment,
    updateStatus,
    confirmBookings,
    postReviews,
    confirmSubscriptionPayment,
    postPayment,
    getSavedProviders,
    saveProvider,
    deleteSavedProvider,
    updateClient,
    updateProvider,
    createConversation,
    sendMessage,
    getProviderConversations,
    getClientConversations,
    getConversations,
}