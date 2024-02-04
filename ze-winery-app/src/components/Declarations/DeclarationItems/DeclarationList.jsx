import Table from 'react-bootstrap/Table';
import styles from './DeclarationItems.module.css'
import DeclarationItem from './DeclarationItem';
import Button from 'react-bootstrap/Button';
import MonthYPicker from '../../MonthYPicker/MonthYPicker';
import { useState } from 'react';


const DeclarationList = ({declarationItems, deleteItemFromDecalarationList, editItemFromDeclarationList}) => {

  let newDate = new Date()
  const [selectedMonthData, setSelectedMonthData] = useState({
    month: newDate.getMonth() + 1,
    year: newDate.getFullYear()
  });

  console.log(selectedMonthData);
 

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
      
      <MonthYPicker  selectedMonthData={selectedMonthData} setSelectedMonthData={setSelectedMonthData}/>
      <Button variant="success">Запази</Button>
      
    </div>
  );


        }


export default DeclarationList