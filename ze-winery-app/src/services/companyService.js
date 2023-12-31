import {request} from './interceptor'
import { baseURL } from '../constants/URL';


export const createCompany = (companyData) => {

    return request.post(`${baseURL}/create-company`, companyData)
}