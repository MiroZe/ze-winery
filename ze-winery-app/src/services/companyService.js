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


export const createDeclaration = (declarationData) => {

    return request.post(`${baseURL}/company/declarations/`,declarationData )
}


export const getCompanyDeclarations = (companyId) => {

    return request.get(`${baseURL}/company/${companyId}/declarations`)
};

export const getCompanyDeclarationById = (declarationId) => {

    return request.get(`${baseURL}/company/declarations/${declarationId}`)
};

export const getCompanyXMLDeclarationById = (declarationId) => {

    return  fetch(`${baseURL}/company/declarations/${declarationId}/xml`, {credentials:'include'})
    
};

export const deleteCompanyDeclarationById = (declarationId) => {

    return request.delete(`${baseURL}/company/declarations/${declarationId}/delete`)
};