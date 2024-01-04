import {request} from './interceptor'
import { baseURL } from '../constants/URL';


export const createCompany = (companyData) => {

    return request.post(`${baseURL}/company/create`, companyData)
};

export const getMyCompanies = (id) => {

    return request.get(`${baseURL}/company/my-companies?userId=${id}`)
};

export const getCompanyById = (companyId) => {

    return request.get(`${baseURL}/company/my-companies/${companyId}`)
}