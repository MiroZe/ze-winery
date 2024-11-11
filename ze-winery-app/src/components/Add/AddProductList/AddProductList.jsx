

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { useForm } from '../../../hooks/useForm';



const AddProductList = ({ product }) => {

    const {formValues,onChangeHandler,} = useForm({
        quantity:0
    });
    console.log(product);
    

    

    return (
        
            <Row>
               
                <Col>{product.trademark}</Col>
                <Col>{product.additionalCode}</Col>
                <Col>{`${product.pieces} l`}</Col>
                <Col>
                    <InputGroup className="mb-3">
                       
                        <Form.Control value={formValues.quantity} onChange={onChangeHandler} name='quantity'/>
                        <Form.Control  disabled value={formValues.quantity * product.pieces} name='totalQuantity'/>
                    </InputGroup>
                </Col>
                <Col>
                    <Button>Добави</Button>
                </Col>
            </Row>

       
    )



}


export default AddProductList