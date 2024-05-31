
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from './CreateAdd.module.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { useForm } from '../../../hooks/useForm';
import { useState } from 'react';
import { clientCreate } from '../../../services/addService';
import { useErrorMessageDispatch } from '../../../hooks/useErrorMessageDispatch';



const ClientForm = ({id}) => {

    
    const { formValues, onChangeHandler } = useForm({
        name: '',
        address: '',
        city: '',
        companyType: '',
        companyId: '',

    });
    const dispatchErrorMessage = useErrorMessageDispatch();

    const [isCompany, setIsCompany] = useState(true);
    const [validated, setValidated] = useState(true);
    const [searchCompanyValue, setSearchCompanyValue] = useState('')
    const changeCompany = () => {
        setIsCompany(!isCompany)
    }

    const onSubmitClientHandler = async (e) => {
        e.preventDefault();
      
        const form = e.currentTarget;
        if(form.checkValidity() === false) {
            setValidated(false);
            return
          }
        const clientData = {...formValues,isCompany,ownerId: id};
        try {
            await clientCreate(clientData);
            
        } catch (error) {
            dispatchErrorMessage(error)
        }
       
    };

    const clientSearchOnchangeHandler = (e) => {
        
        setSearchCompanyValue(e.currentTarget.value);
        console.log(searchCompanyValue);
    }
   

    return (
        <div className={styles['client-container']}>

            <Form.Switch

                type="switch"
                id="mySwitch"
                label={isCompany ? 'Юридическо лице' : 'Физическо лице'}
                onClick={changeCompany}
            />
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Търси
                </Form.Label>
                <Col sm="10">
                    <Form.Control type='text' name='companyName' value={searchCompanyValue} onChange={clientSearchOnchangeHandler} />

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


            <Form onSubmit={onSubmitClientHandler} noValidate validated={!validated}>
                
                    <Form.Group as={Col}>
                        <FloatingLabel label="Име" controlId="floatingInput" className="mb-3">
                            <Form.Control type="text" name='name' value={formValues.name} onChange={onChangeHandler} required />
                        </FloatingLabel>
                    </Form.Group>
                    {isCompany && <>
                <Row className="mb-3">
                        <Form.Group as={Col}>

                            <Form.Select name='companyType' value={formValues.companyType} onChange={onChangeHandler} required>
                                <option value="">Изберете</option>
                                <option value="ЕТ">ЕТ</option>
                                <option value="ЕООД">ЕООД</option>
                                <option value="ООД">ООД</option>
                                <option value="ЕАД">ЕАД</option>
                                <option value="АД">АД</option>
                                <option value="СД">СД</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col}>
                        <FloatingLabel label='ЕИК'>
                            <Form.Control type="number" name='companyId' value={formValues.companyId} onChange={onChangeHandler} required />
                        </FloatingLabel>
                        </Form.Group>
                  
                </Row>
                          </>}
                <FloatingLabel label='Адрес'>
                    <Form.Control type="text" name='address' value={formValues.address} onChange={onChangeHandler} required/>
                </FloatingLabel>
                <FloatingLabel label='Град' >
                    <Form.Control  type="text" name='city' value={formValues.city} onChange={onChangeHandler} required/>
                </FloatingLabel>
               


                <Button variant="outline-success" type='submit' >Запиши</Button>
            </Form>


        </div>

    )


}

export default ClientForm;