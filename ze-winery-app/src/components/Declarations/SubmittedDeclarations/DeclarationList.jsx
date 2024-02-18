import styles from './SubbmittedDeclarations.module.css';
import {faCircleInfo,faFileCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getCompanyDeclarationById, getCompanyXMLDeclarationById } from '../../../services/companyService';
import Accordion from 'react-bootstrap/Accordion';

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
    <Accordion.Item eventKey="0" className={styles['column']}>
    <Accordion.Header>{year} {month}</Accordion.Header>
    <Accordion.Body>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia cupiditate repellendus, quaerat vitae quas fuga libero perferendis reprehenderit a placeat delectus, itaque iusto eos velit explicabo minus voluptatem nam amet.</p>
    <FontAwesomeIcon icon={faCircleInfo} style={{color: "#42777B",marginRight:'12px'}} size='xl' onClick={() => declarationByIdHandler(_id) } />
    <FontAwesomeIcon icon={faFileCode} style={{color: "#42777B",}} size='xl'  onClick={() => xmlDeclarationHandler(_id)}/>
    </Accordion.Body>
     </Accordion.Item>
)


}

export default DeclarationList