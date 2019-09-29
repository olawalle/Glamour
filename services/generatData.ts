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
        url: apiUrls.addServiceCategory,
        data: data
    })
}

let editCategory = (data) => {
    return axios({
        method: 'PUT',
        url: apiUrls.categoriesUrl+'/'+data._id,
        data: data
    })
}

let deleteCategory = (id) => {
    return axios({
        method: 'DELETE',
        url: apiUrls.categoriesUrl+'/'+id
    })
}

let getAllTestimonials = () => {
    return axios({
        method: 'GET',
        url: apiUrls.testimonialUrl
    })
}

let addTestimonial = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.testimonialUrl,
        data: data
    })
}

let editTestimonial = (data) => {
    return axios({
        method: 'PUT',
        url: apiUrls.testimonialUrl+'/'+data._id,
        data: data
    })
}

let deleteTestimonial = (id) => {
    return axios({
        method: 'DELETE',
        url: apiUrls.testimonialUrl+'/'+id
    })
}

let addCity = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.cityUrl,
        data: data
    })
}

let editCity = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.cityUrl+'/'+data._id,
        data: data
    })
}

let getCities = (data) => {
    return axios({
        method: 'GET',
        url: apiUrls.cityUrl
    })
}

let removeCity = (id) => {
    return axios({
        method: 'DELETE',
        url: apiUrls.cityUrl+'/'+id
    })
}

let getPostcode = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.cityUrl+'/postcode',
        data
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

let generalUploadImage = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.uploadUrl,
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

let getImageUrl = (data) => {
    return axios({
        method: 'POST',
        url: apiUrls.uploadUrl,
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
    editCategory,
    deleteCategory,
    getAllTestimonials,
    addTestimonial,
    editTestimonial,
    deleteTestimonial,
    addAddress,
    editAddress,
    deleteAddress,
    getUserAddresses,
    addCity,
    editCity,
    getCities,
    removeCity,
    getPostcode,
    uploadImage,
    getImageUrl,
    generalUploadImage,
    uploadBanner
}