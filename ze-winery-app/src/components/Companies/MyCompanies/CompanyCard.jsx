
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';



const CompanyCard = ({
    // eslint-disable-next-line react/prop-types
    _id, companyName, companyType, companyId, city
}) => {

return (
    <Card>
      <Card.Header as="h5">{companyName} {companyType}</Card.Header>
      <Card.Body>
        <Card.Title>ЕИК : {companyId}</Card.Title>
        <Card.Text>
       {city}
        </Card.Text>
        <Button as={Link} to={`/my-companies/${_id}`}>Избери</Button>
        {/* <Button as={Link} to={'/products'}  variant="primary">Продукти</Button>
        <Button variant="primary">Създай декларация</Button>
        <Button variant="primary">Архив декларации</Button> */}
      </Card.Body>
    </Card>
)

}


export default CompanyCard