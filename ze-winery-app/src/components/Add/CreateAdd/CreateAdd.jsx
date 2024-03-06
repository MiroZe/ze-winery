import { useSelector } from 'react-redux';
import styles from './CreateAdd.module.css';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const CreateAdd = () => {

    const company = useSelector(state => state.company);
    console.log(company);


return (
<div className={styles['add-form-container']}>

    <div className={styles['company-container']}>
        <h3>Издател</h3>
        <Form>
      <Form.Group className="mb-3" >
        <FloatingLabel label="Име">
        <Form.Control type="text"  disabled defaultValue={`${company.companyName} ${company.companyType}`}/>
        </FloatingLabel>
        <FloatingLabel label='ЕИК'>
        <Form.Control type="text"  disabled defaultValue={company.companyId}/>
        </FloatingLabel>
        <FloatingLabel label='Адрес'>
        <Form.Control type="text"  disabled defaultValue={company.address}/>
        </FloatingLabel>
        <FloatingLabel label='Град'>
        <Form.Control type="text"  disabled defaultValue={company.city}/>
        </FloatingLabel>
      </Form.Group>

 
    </Form>

    </div>

</div>

)


};

export default CreateAdd;