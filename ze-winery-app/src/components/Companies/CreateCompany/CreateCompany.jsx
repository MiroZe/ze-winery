
import styles from './CreateCompany.module.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from '../../../hooks/useForm';
import utils from '../../../utils';
import { createCompany } from '../../../services/companyService';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateCompany = () => {

  const {user} = useSelector(state => state.user);
  const [isDeclarer,setIsDeclarer] = useState(false);
  const navigate = useNavigate();

const {formValues, onChangeHandler} = useForm({
  companyName: '',
  companyType:'',
  companyId: '',
  exciseId: '',
  address: '',
  city: '',
  state:'',
  postalCode: '',
  firstName :'',
  lastName: '',
  ownerId: '',
  declarerFirstName: '',
  declarerLastName:'',
  declarerId: ''

});






const createCompanySubmitHandler = async (e) => {
  e.preventDefault();

  const companyData = {
    companyName:formValues.companyName,
    companyType:formValues.companyType,
    companyId:formValues.companyId,
    exciseId:formValues.exciseId,
    address:formValues.address,
    city:formValues.city,
    state:formValues.state,
    postalCode:formValues.postalCode,
    owner : {
      firstName: formValues.firstName,
      lastName:formValues.lastName,
      ownerId:formValues.ownerId
    },
    declarer: {
      declarerFirstName: formValues.declarerFirstName,
      declarerLastName:formValues.declarerLastName,
      declarerId:formValues.declarerId
    }
  }
  if (utils.formFieldCheckFn(companyData)) return;
  try {
  
    await createCompany({...companyData, userId:user._id});
    navigate('/')
   
  } catch (error) {
    console.log(error);
    
  }
};

const onChangeDeclarerHandler = () => {
  setIsDeclarer(!isDeclarer);

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
            <Form.Control type="text" placeholder="Идентификационен номер" name='exciseId' value={formValues.exciseId} onChange={(e) => onChangeHandler(e)} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Адрес</Form.Label>
          <Form.Control placeholder="ул.Примерна 2" name='address' value={formValues.address} onChange={(e) => onChangeHandler(e)}/>
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
        <Row >
          <p>МОЛ</p>
          <Form.Group as ={Col }controlId="formGrid">
            <Form.Label>Собствено Име</Form.Label>
            <Form.Control name='firstName' value={formValues.firstName} onChange={(e) => onChangeHandler(e)}/>
            </Form.Group>
            <Form.Group as ={Col }controlId="formGrid">
            <Form.Label>Фамилия</Form.Label>
            <Form.Control name='lastName' value={formValues.lastName} onChange={(e) => onChangeHandler(e)}/>
            </Form.Group>
            <Form.Group as ={Col }controlId="formGrid">
            <Form.Label>EГН</Form.Label>
            <Form.Control  name='ownerId' type='number' value={formValues.ownerId} onChange={(e) => onChangeHandler(e)}/>
            </Form.Group>
          </Row>
          <Form.Check 
        type="switch"
        id="custom-switch"
        label="Декларатор"
        name='isDeclarer'
        onChange={onChangeDeclarerHandler}
        value={isDeclarer}
      />
      {isDeclarer && 
      <Row >
          <p>Декларатор</p>
          <Form.Group as ={Col }controlId="formGrid">
            <Form.Label>Собствено Име</Form.Label>
            <Form.Control name='declarerFirstName' value={formValues.declarerFirstName} onChange={(e) => onChangeHandler(e)}/>
            </Form.Group>
            <Form.Group as ={Col }controlId="formGrid">
            <Form.Label>Фамилия</Form.Label>
            <Form.Control name='declarerLastName' value={formValues.declarerLastName} onChange={(e) => onChangeHandler(e)}/>
            </Form.Group>
            <Form.Group as ={Col }controlId="formGrid">
            <Form.Label>EГН</Form.Label>
            <Form.Control  name='declarerId' type='number' value={formValues.declarerId} onChange={(e) => onChangeHandler(e)}/>
            </Form.Group>
          </Row>
          }
        <Button variant="primary" type="submit" style={{marginTop:'10px'}}>
          Запази
        </Button>
      </Form>

    </div>
  )

}
export default CreateCompany