
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from './CreateAdd.module.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const ClientForm = () => {

return (
    <div className={styles['client-container']}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Търси клиент
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext   />
        </Col>
        <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
      </Form.Group>
    <h3>Получател</h3>

    <Form>
    
        <Form.Group className="mb-3" >
            <FloatingLabel label="Име">
                <Form.Control type="text" />
            </FloatingLabel>
            <FloatingLabel label='ЕИК'>
                <Form.Control type="text" />
            </FloatingLabel>
            <FloatingLabel label='Адрес'>
                <Form.Control type="text" />
            </FloatingLabel>
            <FloatingLabel label='Град'>
                <Form.Control type="text" />
            </FloatingLabel>

        </Form.Group>
        <Button variant="outline-success">Запиши</Button>
    </Form>


</div>

)


}

export default ClientForm;