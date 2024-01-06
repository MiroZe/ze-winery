import {request} from './interceptor'
import { baseURL } from '../constants/URL';



export const createNewProduct = (companyId, productData) => {

return request.post(`${baseURL}/products/create` , {...productData,companyId})

};

export const getCompanyProducts = (companyId) => {

return request.get(`${baseURL}/company/my-companies/${companyId}/products`)

}