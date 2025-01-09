
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const AddItem = ({itemData}) => {


    return(
       
       
        <Row>
            
            <Col>{itemData.sequenceNumber}</Col>
            <Col>{itemData.trademark}</Col>
            <Col>{itemData.itemPackages} опаковки</Col>
            <Col>{itemData.quantity} л</Col>
            <Col><Button>Изтрий</Button></Col>
          </Row>
       
       
    )
}



export default AddItem;