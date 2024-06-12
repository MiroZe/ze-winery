
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import styles from './MyCompanies.module.css'
import { useSelector } from 'react-redux';



const CompanyCard = ({
  
    _id, companyName, companyType, companyId, city,hidebtn
}) => {

const user = useSelector(state => state.user);
const role = user.user.role


return (
    <Card className={styles['single-card']}>
      <Card.Header as="h5">{companyName} {companyType}</Card.Header>
      <Card.Body>
        <Card.Title>ЕИК : {companyId}</Card.Title>
        <Card.Text>
       {city}
        </Card.Text>
        {!hidebtn && 
        <div className={styles['button-container']}>
        <Button as={Link} to={`/my-companies/${_id}`}>Избери</Button>
        {role === 'admin' && 
          <>
        <Button variant="warning"as={Link} to={`/my-companies/${_id}`}>Редактирай</Button>
        <Button variant="danger"as={Link} to={`/my-companies/${_id}`}>Изтрий</Button>
        </>}
        </div>
        }
      </Card.Body>
    </Card>
)

}


export default CompanyCard