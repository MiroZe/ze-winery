import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import styles from './LoginForm.module.css'
import { useForm } from '../../hooks/useForm';

const LoginForm = () => {

    const {formValues, onChangeHandler} = useForm( 
        {
            username: '',
            password: ''
        }
    )

    const onUserLoginHandler =(e) => {
        e.preventDefault();
    }

    return(
        <div className={styles['login-form-container']}>
        <Form onSubmit={onUserLoginHandler}>
            <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
            >
                <Form.Control type="text" placeholder="name@example.com" name='username' value={formValues.username} onChange={(e) => onChangeHandler(e)}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" name='password' value={formValues.password} onChange={(e) => onChangeHandler(e)}/>
            </FloatingLabel>
            <Button variant="info" type='submit'>Login</Button>
        </Form>
        </div>
    )

}

export default LoginForm;