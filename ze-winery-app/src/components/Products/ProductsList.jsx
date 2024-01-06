import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import styles from './ProductsList.module.css'
import { Link, useParams } from 'react-router-dom';
import { getCompanyProducts } from '../../services/productService';



const ProductsList = () => {
  
 const {companyId} = useParams();
 
 
  const [products,setProducts] = useState([]);

  useEffect(() => {

    getCompanyProducts(companyId)
    .then(setProducts)
    .catch(err => console.log(err))
    
    
  },[companyId])


    return (

      <div className={styles['products-container']}>

     
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Наименование</th>
            <th>Код по КН</th>
            <th>Допълнителен код</th>
            <th>Вместимост</th>
           
          
           
          </tr>
        </thead>
        <tbody>
        {products.map(p => <ProductItem key={p._id} {...p}/>)}
        <tr><td><Link to={'/create-product'}>Създай нов</Link></td> </tr>
        </tbody>
      </Table>
      </div>
    ); 
    


};
export default ProductsList