import {request} from './interceptor'
import { baseURL } from '../constants/URL';

export const clientCreate = (clientData) => {

    const result = request.post(`${baseURL}/add/create`,clientData) 
  
    return result;
}