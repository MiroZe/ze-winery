import {request} from './requester'
import { baseURL } from '../constants/URL';



export const userRegister = async (userData) => {

    const result = request.post(`${baseURL}/register`,userData) 
  
    return result;
}



export const userLogin = async (userData) => {

    const result = request.post(`${baseURL}/login`,userData );
  
return result

}



export const userLogout = async () => {
         return request.post(`${baseURL}/logout`)
}



