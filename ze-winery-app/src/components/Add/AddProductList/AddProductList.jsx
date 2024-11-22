

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from './AddProductList.module.css'

import { useForm } from '../../../hooks/useForm';



const AddProductList = ({ products }) => {

    const {formValues,onChangeHandler,} = useForm({
        quantity:0
    });

    

    

    return (
        
            <Row className={styles["r-3"]}>
               
                <Col>{products.trademark}</Col>
                <Col>{products.additionalCode}</Col>
                <Col>{`${products.pieces} l`}</Col>
                <Col>
                    <InputGroup className={styles["mb-3"]}>
                       
                        <Form.Control value={formValues.quantity} onChange={onChangeHandler} name='quantity'/>
                        <Form.Control  disabled value={formValues.quantity * products.pieces} name='totalQuantity'/>
                    </InputGroup>
                </Col>
                <Col>
                    <Button>Добави</Button>
                </Col>
            </Row>

       
    )



}


export default AddProductList