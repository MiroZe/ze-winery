import Container from 'react-bootstrap/Container';

import { useSelector } from 'react-redux';
import AddItem from './AddItem';
import Button from 'react-bootstrap/esm/Button';
import styles from './AddItemList.module.css'
import { createAdd } from '../../../services/addService';




const AddItemsList = () => {

  const {addProducts} = useSelector(state => state.add);
  const {_id} = useSelector(state => state.company)

 

  const createAddSubmitHandler = async() => {
    
   
    const createdAdd = await createAdd(_id,addProducts);
    console.log(createdAdd);
    

  }
  


return (

 
        <Container className={styles['add-product-list-container']}>
         
         
            {addProducts.map(r => <AddItem key={r._id} itemData={r}/>)}
           
            {addProducts.length > 0 && <Button onClick={createAddSubmitHandler}>Запиши</Button>}
        </Container>
      );

}





export default AddItemsList