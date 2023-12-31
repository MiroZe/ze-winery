import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from './CreateProduct.module.css'


const CreateProduct = () => {

return (

    <div className={styles['new-product-form-container']}>

<Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Търговско наименвание</Form.Label>
          <Form.Control type="text" placeholder="Въведете име" />
          
        </Form.Group>
        <Form.Group as={Col} controlId="formGridType">
        <Form.Label>Код по КН</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Изберете...</option>
            <option>22042180</option>
            <option>22042179</option>
           
          </Form.Select>
          </Form.Group>

      </Row>
      <Row>
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Допълнителен Код</Form.Label>
          <Form.Control type="number"  />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Вместимост на потребителските опаковки</Form.Label>
          <Form.Control type="number" placeholder="0,75" />
        </Form.Group>
 
 
        </Row>

      <Button variant="primary" type="submit">
        Запази
      </Button>
    </Form>


    </div>
)

}
export default CreateProduct