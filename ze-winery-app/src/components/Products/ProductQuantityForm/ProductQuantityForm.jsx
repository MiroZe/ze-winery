
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';




const ProductQuantityForm = (
  {showModal,
    closeModal ,
    currentItem, 
    addItemToDeclaration,
  
  }) => {

  
 const [itemQuantity, setItemQuantity] = useState('')


 const itemQuantityHandler = (e) => {
  setItemQuantity(e.target.value);
 
  
 }

 const onSubmitQuantityValue = (e) => {
 e.preventDefault();
 closeModal();
 addItemToDeclaration(itemQuantity);
 

 }

    return (
      <>
      <Modal show={showModal} >
      <Modal.Header closeButton onClick={closeModal}>
        <Modal.Title>{currentItem.trademarkName} {currentItem.pieces}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
         
            <Form.Label>Количество</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              value={itemQuantity}
              onChange={itemQuantityHandler}
            />
        
        
   
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Затвори
        </Button>
        <Button variant="primary" onClick={onSubmitQuantityValue}>
          Добави
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
      


}
export default ProductQuantityForm