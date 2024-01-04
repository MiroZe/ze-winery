import {request} from './interceptor'
import { baseURL } from '../constants/URL';



export const submitNewProduct = (companyId, productData) => {

return request.post(`${baseURL}/products/create` , {...productData,companyId})

}