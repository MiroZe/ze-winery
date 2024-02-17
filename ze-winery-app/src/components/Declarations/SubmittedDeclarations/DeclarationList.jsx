import Col from 'react-bootstrap/Col';
import styles from './SubbmittedDeclarations.module.css';
import {faCircleInfo,faFileCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getCompanyDeclarationById } from '../../../services/companyService';


const DeclarationList = ({_id, year,month}) => {

    const declarationByIdHandler = async (id) => {
        try {
           
           await getCompanyDeclarationById(id) 
        } catch (error) {
            console.log(error);
        }
    }

return (
    <Col className={styles['column']}>{year} {month}
    <FontAwesomeIcon icon={faCircleInfo} style={{color: "#0476d0",}} size='xl' onClick={() => declarationByIdHandler(_id) } />
    <FontAwesomeIcon icon={faFileCode} style={{color: "#0476d0",}} size='xl' />
     </Col>
)


}

export default DeclarationList