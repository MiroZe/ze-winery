
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddItem = ({itemData}) => {


    return(

        <Row>
            
            <Col>{itemData.sequenceNumber}</Col>
            <Col>{itemData.trademark}</Col>
            <Col>{itemData.itemPackages}</Col>
            <Col>{itemData.quantity}</Col>
          </Row>
    )
}



export default AddItem;