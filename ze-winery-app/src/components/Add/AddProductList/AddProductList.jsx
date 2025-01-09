

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from './AddProductList.module.css'

import { useForm } from '../../../hooks/useForm';
import {setItemToAddProductList} from '../../../reducers/add'
import { useDispatch } from 'react-redux';




const AddProductList = ({ product }) => {

    const {formValues,onChangeHandler,clearFormValues} = useForm({
        quantity:0,
        totalQuantity:0
    });

   



    const dispatch = useDispatch();

    const handleAddClick = () => {
      
        dispatch(setItemToAddProductList({
          currentProduct: product,
          itemPackages: +formValues.quantity,
          itemTotalQuanity: +formValues.quantity * product.pieces,
        }));
        clearFormValues()
        
      };


    

    return (
        
            <Row className={styles["r-3"]}>
               
                <Col sm={true}>{product.trademark}</Col>
                <Col sm={1}>{product.additionalCode}</Col>
                <Col sm={true}>{`${product.pieces} l`}</Col>
                <Col sm={4} className={styles['input-container']}>
                    <InputGroup className={styles["mb-3"]}>
                       
                        <Form.Control value={formValues.quantity} onChange={onChangeHandler} name='quantity'/>
                        <Form.Control  disabled value={formValues.quantity * product.pieces} name='totalQuantity'/>
                    </InputGroup>

                </Col>
                <Col>
                    <Button onClick={handleAddClick}>Добави</Button>
                </Col>
            </Row>

       
    )



}


export default AddProductList