import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ProductModal = ({showProductModal, setShowProductModal}) => {
   // const [show, setShow] = useState(false);

    const handleClose = () =>  setShowProductModal(false)
   // const handleShow = () => setShowProductModal(true);

   
    
    return (

        <Modal
        show={showProductModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
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