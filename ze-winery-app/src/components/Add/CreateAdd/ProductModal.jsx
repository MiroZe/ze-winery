import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ProductModal = ({showProductModal, setShowProductModal}) => {
 

    const handleClose = () =>  setShowProductModal(false)


   
    
    return (

        <Modal
        show={showProductModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Продукти</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <h3>Component here...</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    )



}

export default ProductModal