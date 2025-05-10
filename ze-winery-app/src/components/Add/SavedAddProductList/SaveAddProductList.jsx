
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

const SavedAddProductList = () => {

    const addProducts = useSelector(state => state.add?.addProducts)
    
    



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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
       
      </tbody>
    </Table>

)


}



export default SavedAddProductList;