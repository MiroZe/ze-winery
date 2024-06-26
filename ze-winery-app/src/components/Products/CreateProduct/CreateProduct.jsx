import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from './CreateProduct.module.css'
import { useForm } from '../../../hooks/useForm';
import { createNewProduct } from '../../../services/productService';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BackButton from '../../Common/BackButton/BackButton';


const CreateProduct = () => {

  const {formValues, onChangeHandler} = useForm({
    trademark: '',
    CNCode: '',
    additionalCode:'',
    pieces:''


  });
  const [validated, setValidated] = useState(true);

  const {_id} = useSelector(state => state.company);
  const navigate = useNavigate();

  const onProductSubmitHandler = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if(form.checkValidity() === false) {
      setValidated(false);
      
      return
    }
    try {

      await createNewProduct(_id,formValues);
      navigate(`/my-companies/${_id}/products`)
    } catch (error) {
      console.log(error);
    }
  };

 

  return (

    <div className={styles['new-product-form-container']}>

      <Form onSubmit={onProductSubmitHandler} className={styles['product-form']} noValidate validated={!validated}>
        <Row className="mb-3">
         
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Търговско наименование</Form.Label>
            <Form.Control type="text" placeholder="Въведете име" 
            name='trademark'
            value={formValues.trademark}
            onChange={(e) => onChangeHandler(e)}
            required
            
            />

          </Form.Group>
          
          <Form.Group as={Col} controlId="formGridType">
            <Form.Label>Код по КН</Form.Label>
            <Form.Select required  name='CNCode' value={formValues.CNCode} onChange={(e) => onChangeHandler(e)}>
              <option value="">Изберете...</option>
              <option value="22042180">22042180</option>
              <option value="22042179">22042179</option>
              <option value="22042279">22042279</option>
              <option value="22042280">22042280</option>
              <option value="22042980">22042980</option>

            </Form.Select>
          </Form.Group>

        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Допълнителен Код</Form.Label>
            <Form.Control type="text" name='additionalCode' 
            value={formValues.additionalCode}
            onChange={(e) => onChangeHandler(e)}
            required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Вместимост на опаковките</Form.Label>
            <Form.Control type="number" placeholder="0,75" 
            name='pieces' 
            value={formValues.pieces}
            onChange={(e) => onChangeHandler(e)}
            required
            />
          </Form.Group>


        </Row>
        <div className={styles['actions']}>
        <Button variant="primary" type="submit" className={styles['save-btn']}>
          Запази
        </Button>
        <BackButton path={'/dashboard'}/>
        </div>
      </Form>


    </div>
  )

}
export default CreateProduct