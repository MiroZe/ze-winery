import Table from 'react-bootstrap/Table';



const ProductsList = () => {


    return (
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    ); 
    


}
export default ProductsList