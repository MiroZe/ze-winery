import { useSelector } from 'react-redux';
import styles from './CreateAdd.module.css';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ClientForm from './ClientForm';
import { useState } from 'react';
import AddItemsList from '../AddList/AddItemsLIst';



const CreateAdd = () => {

    const company = useSelector(state => state.company);
    const [addItem, setAddItem] = useState([])
  
 


    return (
        <div className={styles['add-container']}>
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
        {addItem.length > 0 ? <AddItemsList/> : <h3>Добавете продукт</h3>}
        </div>
    )


};

export default CreateAdd;