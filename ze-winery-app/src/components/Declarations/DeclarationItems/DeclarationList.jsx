import Table from 'react-bootstrap/Table';
import styles from './DeclarationItems.module.css'
import DeclarationItem from './DeclarationItem';


const DeclarationList = ({declarationItems}) => {

 

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
           {declarationItems.map((p,index) => <DeclarationItem key={p._id} {...p} index={index}  />)} 
         
        </tbody>
      </Table>
    </div>
  );


        }


export default DeclarationList