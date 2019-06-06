import axios from 'axios'
import * as apiUrls from './apiUrls'

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
    getAllServices,
    getAllTrends
}