
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {clearItemFromAddProductList} from '../../../reducers/add';
import { useDispatch } from 'react-redux';



const AddItem = ({itemData}) => {

    const dispatch = useDispatch();
    

    const clearProductFromList = (currentProductId) => {
        
        
        
        
        dispatch(clearItemFromAddProductList({ id: currentProductId }))
    }


    return(
       
       
        <Row>
            
            <Col>{itemData.sequenceNumber}</Col>
            <Col>{itemData.trademark}</Col>
            <Col>{itemData.itemPackages} опаковки</Col>
            <Col>{itemData.quantity} л</Col>
            <Col><Button onClick={() => clearProductFromList(itemData._id)}>Изтрий</Button></Col>
          </Row>
       
       
    )
}



export default AddItem;