import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import styles from './ProductsList.module.css'
import { Link, useParams } from 'react-router-dom';
import { getCompanyProducts } from '../../services/productService';
import SearchBar from '../SearchBar/SearchBar';
import { useSearch } from '../../hooks/useSearch';



const ProductsList = ({viewChooseBtn, showQuantityModal,isItemSelected}) => {

  const { companyId } = useParams();


  const [products, setProducts] = useState([]);
  const {found, updateSearchValue, searchValue} = useSearch(products);
  

  useEffect(() => {

    getCompanyProducts(companyId)
      .then(setProducts)
      .catch(err => console.log(err))


  }, [companyId])

  

  return (

    <div className={styles['products-container']}>

      <SearchBar updateSearchValue={updateSearchValue} searchValue={searchValue} />
      <Table striped bordered hover>
        <thead>
          <tr>
           
            
            <th>Наименование</th>
            <th>Код по КН</th>
            <th>Допълнителен код</th>
            <th>Вместимост</th>
           
          </tr>
        </thead>
        <tbody>
          {found.map(p => <ProductItem key={p._id} {...p} viewChooseBtn={viewChooseBtn} showQuantityModal={showQuantityModal} isItemSelected={isItemSelected}/>)}
          <tr><td><Link to={'/create-product'}>Създай нов</Link></td> </tr>
        </tbody>
      </Table>
    </div>
  );



};
export default ProductsList