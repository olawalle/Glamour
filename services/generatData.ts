import axios from 'axios'
import * as apiUrls from './apiUrls'


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

export {
    getAllProviders,
    getAllServices,
    getAllTrends
}