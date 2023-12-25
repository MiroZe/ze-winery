
import styles from './CreateCompany.module.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const CreateCompany = () => {

return (
    <div className={styles['create-company-container']}>
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Име на фирмата</Form.Label>
          <Form.Control type="text" placeholder="Въведете име" />
          
        </Form.Group>
        <Form.Group as={Col} controlId="formGridType">
        <Form.Label>Вид</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Изберете...</option>
            <option>ЕТ</option>
            <option>ЕООД</option>
            <option>ООД</option>
            <option>ЕАД</option>
            <option>АД</option>
            <option>СД</option>
          </Form.Select>
          </Form.Group>

      </Row>
      <Row>
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>EИК</Form.Label>
          <Form.Control type="number" placeholder="ЕИК" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>ИН</Form.Label>
          <Form.Control type="number" placeholder="Идентификационен номер" />
        </Form.Group>
        </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Адрес</Form.Label>
        <Form.Control placeholder="ул.Примерна 2" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Адрес 2</Form.Label>
        <Form.Control placeholder="апартамент,етаж," />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Град</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Област</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Изберете...</option>
            <option>Варна</option>
            <option>Бургас</option>
            <option>Добрич</option>
            <option>Хасково</option>
            <option>Кърджали</option>
            <option>Пловдив</option>
            <option>София</option>
            <option>Русе</option>
            <option>Русе</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Пощенски код</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

     

      <Button variant="primary" type="submit">
        Запази
      </Button>
    </Form>

    </div>
)

}
export default CreateCompany