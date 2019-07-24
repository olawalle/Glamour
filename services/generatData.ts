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


let editAddress = (data, id) => {
    return axios({
        method: 'PUT',
        url: apiUrls.addressUrl+'/'+id,
        data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

let deleteAddress = (id) => {
    return axios({
        method: 'DELETE',
        url: apiUrls.addressUrl+'/'+id
    })
}

let getUserAddresses = (token) => {
    let headers = {}
    token ? headers = {'x-access-token': token} : null
    return axios({
        method: 'GET',
        url: apiUrls.addressUrl,
        headers
    })
}

let uploadImage = (data, id) => {
    return axios({
        method: 'POST',
        url: apiUrls.imageUrl+"/"+id,
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
let uploadBanner = (data, id) => {
    return axios({
        method: 'POST',
        url: apiUrls.bannerUploadUrl+"/"+id,
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
    editAddress,
    deleteAddress,
    getUserAddresses,
    uploadImage,
    uploadBanner
}