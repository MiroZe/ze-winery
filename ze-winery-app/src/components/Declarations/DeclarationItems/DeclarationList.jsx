import Table from 'react-bootstrap/Table';
import styles from './DeclarationItems.module.css'
import DeclarationItem from './DeclarationItem';
import Button from 'react-bootstrap/Button';
import MonthYPicker from '../../MonthYPicker/MonthYPicker';
import { useState } from 'react';
import { createDeclaration } from '../../../services/companyService';
import Declarer from '../Declarer/Declarer';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../../hooks/useForm';
import { formatDateAsString } from '../../../utils/formatDateAsString';
import { formFieldCheckFn } from '../../../utils/formsFieldCheckFn';
import { useErrorMessageDispatch } from '../../../hooks/useErrorMessageDispatch';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../../Common/BackButton/BackButton';
import { clearDeclarationDraft } from '../../../reducers/declarationDraft';


const DeclarationList = (
  {declarationItems, deleteItemFromDecalarationList, editItemFromDeclarationList,loadDraftDeclaration}) => {

  const [validated,setValidated] = useState(true);
  const errorMessageDispatch = useErrorMessageDispatch();
  const navigate = useNavigate();
  const {companyId} = useParams();

  let newDate = new Date()
  const [selectedMonthData, setSelectedMonthData] = useState({
    month: newDate.getMonth() + 1,
    year: newDate.getFullYear(),
    day:newDate.getDate()
  });

  const dispatch = useDispatch()
  const currentCompany = useSelector(state => state.company);
  const {declarationDraft} = useSelector(state => state.declarationDraft)
  

 

  const declarerData = {
    ownerNames:`${currentCompany.owner.firstName} ${currentCompany.owner.surName} ${currentCompany.owner.lastName}`,
    ownerId:currentCompany.owner.ownerId,
    declarerNames:`${currentCompany.declarer.declarerFirstName} ${currentCompany.declarer.declarerLastName}`,
    declarerId: currentCompany.declarer.declarerId
    

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
      companyId : currentCompany._id,
      year: dateData.year,
      month: dateData.monthName,
      names: formValues.names,
      startDate: formatDateAsString(formValues.startDate),
      endDate: formatDateAsString(formValues.endDate),
      appliedDocumentsNumbers: formValues.appliedDocumentNumbers,
      appliedDocumentsDescription: `Акцизни данъчни документи - ${formValues.appliedDocumentNumbers}`,
      exciseNumber: currentCompany.exciseNumber,
      SIC: currentCompany.companyId,
      egn: currentCompany.owner.ownerId,
      documentDate: formatDateAsString(formValues.endDate)
      
    }

    try {
      if(formFieldCheckFn(declarationData) 
      || formValues.appliedDocumentDescription === ''
      ){
      
        setValidated(false);
        return;
      }
   
      await createDeclaration(declarationData);
      dispatch(clearDeclarationDraft())
      navigate(`/my-companies/${companyId}/my-declarations`)
      

      
    } catch (error) {
      errorMessageDispatch(error)
    }

  }


 
 

return (
   
    <div className={styles['declaration-container']}>

     
      <Table striped bordered hover>
      {declarationDraft.length > 0 && <Button variant="secondary" onClick={loadDraftDeclaration}>Зареди чернова</Button>}
        <thead>
          <tr>
           
            <th>#</th>
            <th>Наименование</th>
            <th>Код по КН</th>
            <th>Допълнителен код</th>
            <th>Вместимост</th>
            <th>Брой опаковки</th>
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
      <Declarer validated={validated} formValues = {formValues} onChangeHandler = {onChangeHandler}/>
      <Button variant="success" onClick={ () => handleDeclarationSubmit(declarationItems,selectedMonthData)}>Запиши декларацията</Button>
      <BackButton path={`/my-companies/${companyId}`}/>

      
    </div>
  );


        }


export default DeclarationList