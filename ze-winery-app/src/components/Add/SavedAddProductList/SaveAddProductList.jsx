
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import SavedAddProductListSingleRow from './SavedAddProductListSingleRow';

const SavedAddProductList = () => {

    const addProducts = useSelector(state => state.add?.addProducts);
  
    
    



return(

    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Име</th>
          <th>Код</th>
          <th>Вместимост</th>
          <th>Брой опаковки</th>
          <th>Общо количество</th>
        </tr>
      </thead>
      <tbody>
        {addProducts.map(r => <SavedAddProductListSingleRow key={r._id} addProductItem={r}/>)}
       
      </tbody>
    </Table>

)


}



export default SavedAddProductList;