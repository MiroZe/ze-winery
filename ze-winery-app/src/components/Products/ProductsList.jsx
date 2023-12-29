import Table from 'react-bootstrap/Table';
import {mockProducts} from '../mockData/products';
import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import styles from './ProductsList.module.css'



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
            <th>Действителни количества</th>
            <th>Код по КН</th>
            <th>Допълнителен код</th>
            <th>Алкохолен градус</th>
            <th>Вместимост</th>
            <th>Брой потребителски опаковки</th>
            <th>Мерна единица</th>
            <th>Основание</th>
            <th>Плащане</th>
            <th>Размер на акциза</th>
          </tr>
        </thead>
        <tbody>
        {products.map(p => <ProductItem key={p.id} {...p}/>)}
        
        </tbody>
      </Table>
      </div>
    ); 
    


};
export default ProductsList