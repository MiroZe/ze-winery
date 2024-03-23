import { useSelector } from 'react-redux';
import styles from './CreateAdd.module.css';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ClientForm from './ClientForm';

const CreateAdd = () => {

    const company = useSelector(state => state.company);
 


    return (
        <div className={styles['add-form-container']}>
            <ClientForm id={company._id}/>

          
            <h3>Номер</h3>
            <div className={styles['company-container']}>
                <h5>Издател</h5>
                <Form>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label="Име">
                            <Form.Control type="text" disabled defaultValue={`${company.companyName} ${company.companyType}`} />
                        </FloatingLabel>
                        <FloatingLabel label='ЕИК'>
                            <Form.Control type="text" disabled defaultValue={company.companyId} />
                        </FloatingLabel>
                        <FloatingLabel label='Адрес'>
                            <Form.Control type="text" disabled defaultValue={company.address} />
                        </FloatingLabel>
                        <FloatingLabel label='Град'>
                            <Form.Control type="text" disabled defaultValue={company.city} />
                        </FloatingLabel>
                    </Form.Group>

                    
                </Form>
            </div>

        </div>

    )


};

export default CreateAdd;