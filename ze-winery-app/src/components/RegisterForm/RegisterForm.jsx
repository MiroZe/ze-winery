import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from './RegisterForm.module.css'
import { useForm } from '../../hooks/useForm';
import { userRegister } from '../../services/authService';
import{useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setUser } from '../../reducers/users';
import { useErrorMessageDispatch } from '../../hooks/useErrorMessageDispatch';
import { useState } from 'react';


const RegisterForm = () => {

  const [validated, setValidated] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const errorMessageDispatch = useErrorMessageDispatch();

    const{formValues,onChangeHandler} = useForm(
        {
            username: '',
            email:'',
            password:'',
            rePassword:'',
        }
    )

    const onUserRegisterHandler = async (e) => {

        e.preventDefault();
        const form = e.currentTarget;
        if(form.checkValidity() === false) {
            setValidated(false);
            return
          }
        try {
            const user = await userRegister(formValues);
            dispatch((setUser(user)))
            navigate('/dashboard')
        } catch (error) {
            errorMessageDispatch(error)
        }


    }


    return (
        <div className={styles['register-form-container']}>
            <h3>Register</h3>
        <Form onSubmit={onUserRegisterHandler} className={styles['form-container']} noValidate validated={!validated}>
            <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
            >
                <Form.Control required type="text" placeholder="name@example.com" name='username' value={formValues.username} onChange={(e) => onChangeHandler(e)}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingemail" label="Email" className="mb-3">
                <Form.Control required type="text" placeholder="email" name='email' value={formValues.email} onChange={(e) => onChangeHandler(e)}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control required type="password" placeholder="Password" name='password' value={formValues.password} onChange={(e) => onChangeHandler(e)}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingRePassword" label="Repeat Password" className="mb-3">
                <Form.Control required type="password" placeholder="Repeat Password" name='rePassword' value={formValues.rePassword} onChange={(e) => onChangeHandler(e)}/>
            </FloatingLabel>
            <Button variant="info" type='submit' className={styles['submit-btn']}>Register</Button>
        </Form>
       
        </div>
    )


} 

export default RegisterForm