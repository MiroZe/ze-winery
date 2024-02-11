
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import styles from './MyCompanies.module.css'



const CompanyCard = ({
    // eslint-disable-next-line react/prop-types
    _id, companyName, companyType, companyId, city,hidebtn
}) => {

return (
    <Card>
      <Card.Header as="h5">{companyName} {companyType}</Card.Header>
      <Card.Body>
        <Card.Title>ЕИК : {companyId}</Card.Title>
        <Card.Text>
       {city}
        </Card.Text>
        {!hidebtn && 
        <div className={styles['button-container']}>
        <Button as={Link} to={`/my-companies/${_id}`}>Избери</Button>
        <Button variant="warning"as={Link} to={`/my-companies/${_id}`}>Редактирай</Button>
        <Button variant="danger"as={Link} to={`/my-companies/${_id}`}>Изтрий</Button>
        </div>
        }
      </Card.Body>
    </Card>
)

}


export default CompanyCard