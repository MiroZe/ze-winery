import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './SubbmittedDeclarations.module.css'


const SubmittedDeclarations = () => {


return (
    <Container className={style['declarations-container']}>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
     
    </Container>
)


}

export default SubmittedDeclarations