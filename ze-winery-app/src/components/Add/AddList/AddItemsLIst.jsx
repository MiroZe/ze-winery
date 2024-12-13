import Container from 'react-bootstrap/Container';

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