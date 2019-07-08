import axios from 'axios'
import * as apiUrls from './apiUrls'


let getAllUsers = () => {
    return axios({
        method: 'GET',
        url: apiUrls.getAllUsers
    })
}

let getAllProviders = () => {
    return axios({
        method: 'GET',
        url: apiUrls.allProvidersUrl
    })
}

let getAllServices = () => {
    return axios({
        method: 'GET',
        url: apiUrls.servicesUrl
    })
}

let getAllTrends = () => {
    return axios({
        method: 'GET',
        url: apiUrls.trendsUrl
    })
}

let getAllCategories = () => {
    return axios({
        method: 'GET',
        url: apiUrls.categoriesUrl
    })
}

let addCategory = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.categoriesUrl,
        data: data
    })
}

let addAddress = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.addressUrl,
        data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

let getUserAddresses = (token) => {
    return axios({
        method: 'GET',
        url: apiUrls.addressUrl,
        headers: {
            'x-access-token': token
        }
    })
}

let uploadImage = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.imageUrl,
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
let uploadBanner = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.bannerUploadUrl,
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export {
    getAllUsers,
    getAllProviders,
    getAllServices,
    getAllTrends,
    getAllCategories,
    addCategory,
    addAddress,
    getUserAddresses,
    uploadImage,
    uploadBanner
}