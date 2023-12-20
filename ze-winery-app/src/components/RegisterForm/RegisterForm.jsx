import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const RegisterForm = () => {


    return (
        <div>
        <Form>
            <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
            >
                <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingemail" label="Email" className="mb-3">
                <Form.Control type="text" placeholder="email" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingRePassword" label="Repeat Password" className="mb-3">
                <Form.Control type="password" placeholder="Repeat Password" />
            </FloatingLabel>
            <Button variant="info">Register</Button>
        </Form>
        </div>
    )


} 

export default RegisterForm