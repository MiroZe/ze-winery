import Col from 'react-bootstrap/Col';
import styles from './SubbmittedDeclarations.module.css';
import {faCircleInfo,faFileCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getCompanyDeclarationById, getCompanyXMLDeclarationById } from '../../../services/companyService';


const DeclarationList = ({_id, year,month}) => {

    const declarationByIdHandler = async (id) => {
        try {
           
           const declaration = await getCompanyDeclarationById(id);
           console.log(declaration);
           
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

return (
    <Col className={styles['column']}>{year} {month}
    <FontAwesomeIcon icon={faCircleInfo} style={{color: "#0476d0",}} size='xl' onClick={() => declarationByIdHandler(_id) } />
    <FontAwesomeIcon icon={faFileCode} style={{color: "#0476d0",}} size='xl'  onClick={() => xmlDeclarationHandler(_id)}/>
     </Col>
)


}

export default DeclarationList