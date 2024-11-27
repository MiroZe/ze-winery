import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddProducts from '../AddProducts/AddProducts';

const ProductModal = ({products, showProductModal, setShowProductModal}) => {
 
  
 

    const handleClose = () =>  setShowProductModal(false)


   
    
    return (

        <Modal
        show={showProductModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      
        
      >
        <Modal.Header closeButton>
          <Modal.Title>Продукти</Modal.Title>
        </Modal.Header>
        <Modal.Body >
       <h3>Търси продукт...</h3>
       <AddProducts products={products}/>
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