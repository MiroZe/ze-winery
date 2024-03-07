
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from './CreateAdd.module.css'



const ClientForm = () => {

return (
    <div className={styles['client-container']}>
    <h3>Получател</h3>
    <Form>
        <Form.Group className="mb-3" >
            <FloatingLabel label="Име">
                <Form.Control type="text" />
            </FloatingLabel>
            <FloatingLabel label='ЕИК'>
                <Form.Control type="text" />
            </FloatingLabel>
            <FloatingLabel label='Адрес'>
                <Form.Control type="text" />
            </FloatingLabel>
            <FloatingLabel label='Град'>
                <Form.Control type="text" />
            </FloatingLabel>

        </Form.Group>
    </Form>


</div>

)


}

export default ClientForm;