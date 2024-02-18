import styles from './SubbmittedDeclarations.module.css';
import {faCircleInfo,faFileCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getCompanyDeclarationById, getCompanyXMLDeclarationById } from '../../../services/companyService';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';

const DeclarationList = ({_id, year,month}) => {

    const [currentDeclaration,setCurrentDeclaration] = useState({})

    const declarationByIdHandler = async (id) => {
        try {
           
           const declaration = await getCompanyDeclarationById(id);
           setCurrentDeclaration(declaration)
          
           
        } catch (error) {
            console.log(error);
        }
    }

    const xmlDeclarationHandler = async (id) => {
        try {
         const response = await getCompanyXMLDeclarationById(id);
         
          const blob = await response.blob();
           const url = window.URL.createObjectURL(blob);
           const link = document.createElement('a');
           link.href = url;
           link.setAttribute('download', `${month}${year}.xml`); 
           document.body.appendChild(link);
           link.click();
           document.body.removeChild(link);
           window.URL.revokeObjectURL(url);
            
        } catch (error) {
            console.log(error);
        }
    }

    console.log(currentDeclaration);


return (
    <Accordion.Item  className={styles['column']}>
    <Accordion.Header>{year} {month}</Accordion.Header>
    <Accordion.Body>
    <FontAwesomeIcon icon={faCircleInfo} style={{color: "#42777B",marginRight:'12px'}} size='xl' onClick={() => declarationByIdHandler(_id) } />
    <FontAwesomeIcon icon={faFileCode} style={{color: "#42777B",}} size='xl'  onClick={() => xmlDeclarationHandler(_id)}/>
       {currentDeclaration.createdAt &&  <>
       <p>Подадена на: <span>{currentDeclaration.createdAt}</span></p>
       <p>Приложени документи: <span>{currentDeclaration?.appliedDocuments.appliedDocument.description}</span></p>
       <p>Номера на документи: <span>{currentDeclaration?.appliedDocuments.appliedDocument.documentNumber}</span></p>
       </>}
    </Accordion.Body>
     </Accordion.Item>
)


}

export default DeclarationList