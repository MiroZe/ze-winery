
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from './CreateAdd.module.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { useForm } from '../../../hooks/useForm';
import { useState } from 'react';



const ClientForm = () => {

    const { formValues, onChangeHandler } = useForm();
    const [showClientForm, setShowClientForm] = useState(false)

    return (
        <div className={styles['client-container']}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Търси
                </Form.Label>
                <Col sm="10">
                    <Form.Control type='text' defaultValue='11111' />

                </Col>
            </Form.Group>
            <ListGroup as="ul">
                <ListGroup.Item as="li" active>
                    Cras justo odio
                </ListGroup.Item>
                <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item as="li" disabled>
                    Morbi leo risus
                </ListGroup.Item>
                <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
            <h3>Получател</h3>

            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <FloatingLabel label="Име">
                            <Form.Control type="text" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Select required name='companyType' >
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
                <FloatingLabel label='ЕИК'>
                    <Form.Control type="text" />
                </FloatingLabel>
                <FloatingLabel label='Адрес'>
                    <Form.Control type="text" />
                </FloatingLabel>
                <FloatingLabel label='Град'>
                    <Form.Control type="text" />
                </FloatingLabel>


                <Button variant="outline-success">Запиши</Button>
            </Form>


        </div>

    )


}

export default ClientForm;