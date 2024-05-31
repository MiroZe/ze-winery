import {request} from './interceptor'
import { baseURL } from '../constants/URL';

export const clientCreate = (clientData) => {

    const result = request.post(`${baseURL}/client/create`,clientData) 
  
    return result;
};


export const clientSearch = (query,id) => {
    const queryString = `?name=${encodeURIComponent(query)}&companyId=${encodeURIComponent(id)}`;
    const result = request.get(`${baseURL}/client/search${queryString}`);
    return result;
}