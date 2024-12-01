import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import AddItem from './AddItem';




const AddItemsList = () => {

  const {addProducts} = useSelector(state => state.add)
  console.log(addProducts);
  


return (

 
        <Container>
         
            {addProducts.map(r => <AddItem key={r._id} itemData={r}/>)}
           
     
         
        </Container>
      );

}





export default AddItemsList