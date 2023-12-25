import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyCompanies = () => {

return (

    <div >
    <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Продукти</Button>
        <Button variant="primary">Създай декларация</Button>
        <Button variant="primary">Архив декларации</Button>
      </Card.Body>
    </Card>

    </div>
  
)


}
export default MyCompanies