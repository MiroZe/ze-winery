import {request} from './interceptor'
import { baseURL } from '../constants/URL';



export const userRegister = async (userData) => {

    const result = request.post(`${baseURL}/auth/register`,userData) 
  
    return result;
}



export const userLogin = async (userData) => {

    const result = request.post(`${baseURL}/auth/login`,userData );
  
return result

}



export const userLogout = async () => {
         return request.post(`${baseURL}/auth/logout`)
}



