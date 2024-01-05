import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import styles from './LoginForm.module.css'
import { useForm } from '../../hooks/useForm';
import  utils  from '../../utils'
import { userLogin } from '../../services/authService';
import { useDispatch } from 'react-redux';
import { setUser } from '../../reducers/users';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const {formValues, onChangeHandler} = useForm( 
        {
            username: '',
            password: ''
        }
    )

    const onUserLoginHandler = async(e) => {
        e.preventDefault();
        if (utils.formFieldCheckFn(formValues)) return;

        try {
            const user = await userLogin(formValues);
            console.log(user);
            dispatch(setUser(user));
            navigate('/dashboard')
            
        } catch (error) {
            console.log(error);
        }



    }

    return(
        <div className={styles['login-form-container']}>
        <Form onSubmit={onUserLoginHandler} className={styles['form-container']}>
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
            <Button variant="info" type='submit' className={styles['submit-btn']}>Login</Button>
        </Form>
        </div>
    )

}

export default LoginForm;