import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddProducts from '../AddProducts/AddProducts';
import styles from './ProductModal.module.css'
import AddItemsList from '../AddList/AddItemsLIst';

const ProductModal = ({products, showProductModal, setShowProductModal}) => {
 
  
 

    const handleClose = () =>  setShowProductModal(false)


   
    
    return (
   
        <Modal
        show={showProductModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        fullscreen
        centered
      
        
      >
        <Modal.Header >
          <Modal.Title>Продукти</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles['content-container']} >
       
       <AddProducts className={styles['products-container']} products={products}/>
       <AddItemsList className={styles['items-container']}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    

  
    
    )


}

export default ProductModal