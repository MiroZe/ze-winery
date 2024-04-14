
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from '../../../hooks/useForm';




const ProductQuantityForm = (
  {showModal,
    closeModal ,
    currentItem, 
    addItemToDeclaration,
  
  }) => {

  
 const {formValues, onChangeHandler} = useForm({
  packsQuantity: '',
  quantityInLitters : ''
 });


console.log(currentItem);

 const onSubmitQuantityValue = (e) => {
 e.preventDefault();
 closeModal();
 const quantityInLitters = parseFloat(formValues.packsQuantity) * parseFloat(currentItem.pieces);

 addItemToDeclaration(parseFloat(formValues.packsQuantity),quantityInLitters);
 

 }

    return (
      <>
      <Modal show={showModal} >
      <Modal.Header closeButton onClick={closeModal}>
        <Modal.Title>{currentItem.trademark} {currentItem.pieces}</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Form.Label>Брой опаковки</Form.Label>
            <Form.Control
              type="text"
              name='packsQuantity'
              autoFocus
              value={formValues.packsQuantity}
              onChange={onChangeHandler}
            />
      
         
            <Form.Label>Количество</Form.Label>
            <Form.Control
              type="text"
              name='quantityInLitters'
              autoFocus
              value={formValues.packsQuantity * currentItem.pieces}
              onChange={onChangeHandler}
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