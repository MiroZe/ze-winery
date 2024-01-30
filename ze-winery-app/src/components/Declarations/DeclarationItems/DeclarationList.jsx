import Table from 'react-bootstrap/Table';
import styles from './DeclarationItems.module.css'
import DeclarationItem from './DeclarationItem';
import Button from 'react-bootstrap/Button';


const DeclarationList = ({declarationItems, deleteItemFromDecalarationList, editItemFromDeclarationList}) => {

 

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
            <th></th>
          </tr>
        </thead>
        <tbody>
           {declarationItems.map((p,index) => <DeclarationItem 
                                              key={p._id} {...p}
                                               index={index} 
                                               deleteItemFromDecalarationList={deleteItemFromDecalarationList}
                                               editItemFromDeclarationList= {editItemFromDeclarationList}
                                               />)} 
         
        </tbody>
      </Table>
      <Button variant="success">Запази</Button>
    </div>
  );


        }


export default DeclarationList