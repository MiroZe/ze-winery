

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

    const {formValues,onChangeHandler,} = useForm({
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
        
      };


    

    return (
        
            <Row className={styles["r-3"]}>
               
                <Col>{product.trademark}</Col>
                <Col>{product.additionalCode}</Col>
                <Col>{`${product.pieces} l`}</Col>
                <Col>
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