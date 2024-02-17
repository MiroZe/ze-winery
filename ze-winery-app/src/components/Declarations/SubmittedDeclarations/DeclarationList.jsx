import Col from 'react-bootstrap/Col';
import styles from './SubbmittedDeclarations.module.css';
import {faCircleInfo,faFileCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const DeclarationList = ({_id, year,month}) => {

return (
    <Col className={styles['column']}>{year} {month}
    <FontAwesomeIcon icon={faCircleInfo} style={{color: "#0476d0",}} size='xl' />
    <FontAwesomeIcon icon={faFileCode} style={{color: "#0476d0",}} size='xl' />
     </Col>
)


}

export default DeclarationList