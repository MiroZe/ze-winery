import Container from 'react-bootstrap/Container';

import { useSelector } from 'react-redux';
import AddItem from './AddItem';
import Button from 'react-bootstrap/esm/Button';
import styles from './AddItemList.module.css'





const AddItemsList = ({handleClose,showAddProductListTable}) => {

  const {addProducts} = useSelector(state => state.add);


  

 

  const createAddSubmitHandler = async() => {
    showAddProductListTable()
    handleClose()
  
  }
  


return (

 
        <Container className={styles['add-product-list-container']}>
         
         
            {addProducts.map(r => <AddItem key={r._id} itemData={r}/>)}
           
            {addProducts.length > 0 && <Button onClick={createAddSubmitHandler}>Запиши</Button>}
        </Container>
      );

}





export default AddItemsList