
import { useForm } from '../../../hooks/useForm';
import { useCallback, useState } from 'react';
import { clientCreate, clientSearch } from '../../../services/addService';
import { useErrorMessageDispatch } from '../../../hooks/useErrorMessageDispatch';
import { debouncedFetchResults } from '../../../utils/debounceSearch';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './CreateAdd.module.css';



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
    const [searchCompanyValue, setSearchCompanyValue] = useState('');
    const [foundClient, setFoundClient] = useState([]);

    
   

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

    const debouncedFetchResultsMemoized = useCallback(
        (query,_id) => debouncedFetchResults(query,_id,clientSearch ),
        []
      );

    const clientSearchOnchangeHandler = async(e) => {
        
        setSearchCompanyValue(e.currentTarget.value);
        try {
           const companyId = id
            const query = searchCompanyValue;
            const result = await debouncedFetchResultsMemoized(query,companyId);
            setFoundClient(result);
            console.log(foundClient);
            
            
        } catch (error) {
            console.log(error);
        }
     
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
                {foundClient.length > 0 ? foundClient.map(f =>  <ListGroup.Item as="li" active key={f._index} {...f}>
                   { f.name}
                </ListGroup.Item>) : <ListGroup.Item as="li" active>
                    Няма резултат. Създайте нов.
                </ListGroup.Item>}
               
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