
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';



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
        <Button as={Link} to={`/my-companies/${_id}`}>Избери</Button>
        }
      </Card.Body>
    </Card>
)

}


export default CompanyCard