import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import styles from './LoginForm.module.css'

const LoginForm = () => {

    return(
        <div className={styles['login-form-container']}>
        <Form>
            <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
            >
                <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <Button variant="info">Login</Button>
        </Form>
        </div>
    )

}

export default LoginForm;