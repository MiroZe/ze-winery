import Table from 'react-bootstrap/Table';
import {mockProducts} from '../mockData/products';
import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import styles from './ProductsList.module.css'
import { Link } from 'react-router-dom';



const ProductsList = () => {
  

 
  const [products,setProducts] = useState([]);

  useEffect(() => {
    
    setProducts(mockProducts)
  },[])


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
        {products.map(p => <ProductItem key={p.id} {...p}/>)}
        <tr><td><Link to={'/create-product'}>Създай нов</Link></td> </tr>
        </tbody>
      </Table>
      </div>
    ); 
    


};
export default ProductsList