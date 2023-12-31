
import styles from './CreateCompany.module.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from '../../../hooks/useForm';


const CreateCompany = () => {


const {formValues, onChangeHandler} = useForm({
  companyName: '',
  companyType:'',
  companyId: '',
  exciseId: '',
  address: '',
  address2: '',
  city: '',
  state:'',
  postalCode: ''

})

const createCompanySubmitHandler = (e) => {
  e.preventDefault()
  console.log(formValues);
}

  return (
    <div className={styles['create-company-container']}>
      <Form onSubmit={createCompanySubmitHandler}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Име на фирмата</Form.Label>
            <Form.Control type="text" placeholder="Въведете име" name='companyName' value={formValues.companyName} onChange={(e) => onChangeHandler(e)}/>

          </Form.Group>
          <Form.Group as={Col} controlId="formGridType">
            <Form.Label>Вид</Form.Label>
            <Form.Select defaultValue="Choose..." name='companyType' value={formValues.companyType} onChange={(e) => onChangeHandler(e)} >
              <option value="">Изберете...</option>
              <option value="ЕТ">ЕТ</option>
              <option value="ЕООД">ЕООД</option>
              <option value="ООД">ООД</option>
              <option value="ЕАД">ЕАД</option>
              <option value="АД">АД</option>
              <option value="СД">СД</option>
            </Form.Select>
          </Form.Group>

        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>EИК</Form.Label>
            <Form.Control type="number" placeholder="ЕИК" name='companyId' value={formValues.companyId} onChange={(e) => onChangeHandler(e)}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>ИН</Form.Label>
            <Form.Control type="number" placeholder="Идентификационен номер" name='exciseId' value={formValues.exciseId} onChange={(e) => onChangeHandler(e)} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Адрес</Form.Label>
          <Form.Control placeholder="ул.Примерна 2" name='address' value={formValues.address} onChange={(e) => onChangeHandler(e)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Адрес 2</Form.Label>
          <Form.Control placeholder="апартамент,етаж," name='address2' value={formValues.address2} onChange={(e) => onChangeHandler(e)}/>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Град</Form.Label>
            <Form.Control name='city' value={formValues.city} onChange={(e) => onChangeHandler(e)}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Област</Form.Label>
            <Form.Select defaultValue="Choose..." name='state' value={formValues.state} onChange={(e) => onChangeHandler(e)}>
              <option value="">Изберете...</option>
              <option value="Варна">Варна</option>
              <option value="Бургас">Бургас</option>
              <option value="Добрич">Добрич</option>
              <option value="Хасково">Хасково</option>
              <option value="Кърджали">Кърджали</option>
              <option value="Пловдив">Пловдив</option>
              <option value="София">София</option>
              <option value="Русе">Русе</option>
              <option value="Благоевград">Благоевград</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Пощенски код</Form.Label>
            <Form.Control name='postalCode' value={formValues.postalCode} onChange={(e) => onChangeHandler(e)}/>
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