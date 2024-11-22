import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const AddItemsList = ({item}) => {


return (

 
        <Container>
          <Row>
            <Col>{item.tradeName}</Col>
            <Col>2 of 2</Col>
          </Row>
         
        </Container>
      );

}





export default AddItemsList