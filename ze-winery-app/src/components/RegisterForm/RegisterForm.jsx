import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from './RegisterForm.module.css'
import { useForm } from '../../hooks/useForm';


const RegisterForm = () => {


    const{formValues,onChangeHandler} = useForm(
        {
            email:'',
            password:'',
            rePassword:'',
        }
    )

    const onUserRegisterHandler = (e) => {

        e.preventDefault();


    }


    return (
        <div className={styles['register-form-container']}>
        <Form onSubmit={onUserRegisterHandler}>
            <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
            >
                <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingemail" label="Email" className="mb-3">
                <Form.Control type="text" placeholder="email" name='email' value={formValues.email} onChange={(e) => onChangeHandler(e)}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="Password" name='passwod' value={formValues.password} onChange={(e) => onChangeHandler(e)}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingRePassword" label="Repeat Password" className="mb-3">
                <Form.Control type="password" placeholder="Repeat Password" name='rePasswod' value={formValues.rePassword} onChange={(e) => onChangeHandler(e)}/>
            </FloatingLabel>
            <Button variant="info" type='submit'>Register</Button>
        </Form>
        </div>
    )


} 

export default RegisterForm