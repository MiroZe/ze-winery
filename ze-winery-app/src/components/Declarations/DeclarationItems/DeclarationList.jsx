import Table from 'react-bootstrap/Table';
import styles from './DeclarationItems.module.css'
import DeclarationItem from './DeclarationItem';
import Button from 'react-bootstrap/Button';
import MonthYPicker from '../../MonthYPicker/MonthYPicker';
import { useState } from 'react';
import { createDeclaration } from '../../../services/companyService';
import Declarer from '../Declarer/Declarer';
import { useSelector } from 'react-redux';


const DeclarationList = ({declarationItems, deleteItemFromDecalarationList, editItemFromDeclarationList}) => {

  let newDate = new Date()
  const [selectedMonthData, setSelectedMonthData] = useState({
    month: newDate.getMonth() + 1,
    year: newDate.getFullYear()
  });

  const currentCompany = useSelector(state => state.company)

  const declarerData = {
    ownerNames:`${currentCompany.owner.firstName} ${currentCompany.owner.lastName}`,
    ownerId:currentCompany.owner.ownerId,
    declarerNames:`${currentCompany.declarer.declarerFirstName} ${currentCompany.declarer.declarerLastName}`,
    declarerId: currentCompany.declarer.declarerId,

  }
  

  

  const handleDeclarationSubmit = async (declarationItems, dateData) => {

    const declarationData = {
      declarationItems,
      year: dateData.year,
      month: dateData.monthName
      
    }

    try {
      const result = await createDeclaration(declarationData);
      console.log(result);
    } catch (error) {
      console.log(error);
    }

  }
 

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
      <Declarer declarerData = {declarerData}/>
      <Button variant="success" onClick={ () => handleDeclarationSubmit(declarationItems,selectedMonthData)}>Запази</Button>

      
    </div>
  );


        }


export default DeclarationList