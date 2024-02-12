import Table from 'react-bootstrap/Table';
import styles from './DeclarationItems.module.css'
import DeclarationItem from './DeclarationItem';
import Button from 'react-bootstrap/Button';
import MonthYPicker from '../../MonthYPicker/MonthYPicker';
import { useState } from 'react';
import { createDeclaration } from '../../../services/companyService';
import Declarer from '../Declarer/Declarer';
import { useSelector } from 'react-redux';
import { useForm } from '../../../hooks/useForm';
import { formatDateAsString } from '../../../utils/formatDateAsString';


const DeclarationList = ({declarationItems, deleteItemFromDecalarationList, editItemFromDeclarationList}) => {



  let newDate = new Date()
  const [selectedMonthData, setSelectedMonthData] = useState({
    month: newDate.getMonth() + 1,
    year: newDate.getFullYear(),
    day:newDate.getDate()
  });

  const currentCompany = useSelector(state => state.company)
 

  const declarerData = {
    ownerNames:`${currentCompany.owner.firstName} ${currentCompany.owner.surName} ${currentCompany.owner.lastName}`,
    ownerId:currentCompany.owner.ownerId,
    declarerNames:`${currentCompany.declarer.declarerFirstName} ${currentCompany.declarer.declarerLastName}`,
    declarerId: currentCompany.declarer.declarerId,

  };
  
  const {formValues, onChangeHandler} = useForm({
    names: declarerData.ownerNames || '' ,
    id : declarerData.ownerId,
    startDate: '',
    endDate: '',
    appliedDocumentDescription:'',
    appliedDocumentNumbers:''

 });

 
 
  
  const handleDeclarationSubmit = async (declarationItems, dateData) => {

    const declarationData = {
      declarationItems,
      year: dateData.year,
      month: dateData.monthName,
      names: formValues.names,
      startDate: formatDateAsString(formValues.startDate),
      endDate: formatDateAsString(formValues.endDate),
      appliedDocumentsDescription: formValues.appliedDocumentNumbers,
      exciseNumber: currentCompany.exciseNumber,
      SIC: currentCompany.companyId,
      egn: currentCompany.owner.ownerId,
      documentDate: Object.values(selectedMonthData).reverse().join('')
      
    }

    try {
      //const result = await createDeclaration(declarationData);
      console.log(declarationData);
      console.log(declarationData.documentDate);
      console.log(selectedMonthData);
      //console.log(result);
      
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
      <Declarer formValues = {formValues} onChangeHandler = {onChangeHandler}/>
      <Button variant="success" onClick={ () => handleDeclarationSubmit(declarationItems,selectedMonthData)}>Запази</Button>

      
    </div>
  );


        }


export default DeclarationList