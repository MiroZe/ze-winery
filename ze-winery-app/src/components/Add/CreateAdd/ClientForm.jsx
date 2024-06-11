
import { useForm } from '../../../hooks/useForm';
import { useCallback, useEffect, useState } from 'react';
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



const ClientForm = ({ id }) => {


    const { formValues, onChangeHandler, setFormValues } = useForm({
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
    const [showClientForm, setShowClientForm] = useState(false);
    const [newClient, setNewClient] = useState(false);




    const changeCompany = () => {
        setIsCompany(!isCompany)
    }

    const onSubmitClientHandler = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(false);
            return
        }
        const clientData = { ...formValues, isCompany, ownerId: id };
        try {
            await clientCreate(clientData);

        } catch (error) {
            dispatchErrorMessage(error)
        }

    };



    const debouncedFetchResultsMemoized = useCallback(
        (query, _id) => debouncedFetchResults(query, _id, clientSearch),
        []
    );

    useEffect(() => {
        const fetchResults = async () => {
            try {

                const result = await debouncedFetchResultsMemoized(searchCompanyValue, id);
                setFoundClient(result);

            } catch (error) {
                console.log(error);
            }
        };


        fetchResults()
    }, [searchCompanyValue, foundClient, id, debouncedFetchResultsMemoized]);

    const clientSearchOnchangeHandler = (e) => {

        setSearchCompanyValue(e.currentTarget.value);
        if (!e.currentTarget.value) {
            setFormValues({
                name: '',
                address: '',
                city: '',
                companyType: '',
                companyId: '',

            })
            setShowClientForm(false);
        }

    };

    const chooseClientHandler = (id) => {

        if (id) {
            const choosenClient = foundClient.find(r => r._id === id);
            setFormValues(choosenClient);
            setNewClient(false);
            
        } else {
            setFormValues({
                name: '',
                address: '',
                city: '',
                companyType: '',
                companyId: '',

            })
            setNewClient(true);
            
        }
        setShowClientForm(true)
    }



    return (
        <div className={styles['client-container']}>


            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Търси клиент
                </Form.Label>
                <Col sm="10">
                    <Form.Control type='text' name='companyName' value={searchCompanyValue} onChange={clientSearchOnchangeHandler} />

                </Col>
            </Form.Group>
            {searchCompanyValue === '' ? <></> :
                <ListGroup as="ul">
                    {foundClient?.length > 0 ? foundClient.map(f => <ListGroup.Item as="li" active key={f._id} {...f} onClick={() => chooseClientHandler(f._id)} >
                        {f.name}
                    </ListGroup.Item>) : <ListGroup.Item as="li" active onClick={() => chooseClientHandler()}>
                        Няма резултат. Създайте нов.
                    </ListGroup.Item>}

                </ListGroup>
            }

            {showClientForm && (<>

                <h3>Получател</h3>
                {newClient && <Form.Switch

                    type="switch"
                    id="mySwitch"
                    label={isCompany ? 'Юридическо лице' : 'Физическо лице'}
                    onClick={changeCompany}

                />}

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
                        <Form.Control type="text" name='address' value={formValues.address} onChange={onChangeHandler} required />
                    </FloatingLabel>
                    <FloatingLabel label='Град' >
                        <Form.Control type="text" name='city' value={formValues.city} onChange={onChangeHandler} required />
                    </FloatingLabel>



                    <Button variant="outline-success" type='submit' disabled={!newClient} >Запиши</Button>

                </Form>
                <Button variant="outline-success" type='button' >Към стоки</Button>
            </>)}


        </div>

    )


}

export default ClientForm;