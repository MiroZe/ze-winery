import Table from 'react-bootstrap/Table';
import styles from './DeclarationItems.module.css'


const DeclarationList = () => {

return (
   
    <div className={styles['declaration-container']}>

      
      <Table striped bordered hover>
        <thead>
          <tr>
           
         
            <th>#</th>
           
           
          
            <th>Наименование</th>
            <th>Код по КН</th>
            <th>Допълнителен код</th>
            <th>Вместимост</th>
            <th>Количество</th>
          </tr>
        </thead>
        <tbody>
          {/* {found.map(p => <DeclarationItem key={p._id} {...p} />)} */}
         
        </tbody>
      </Table>
    </div>
  );


        }


export default DeclarationList