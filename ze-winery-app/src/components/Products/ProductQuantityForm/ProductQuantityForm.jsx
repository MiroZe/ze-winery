
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




const ProductQuantityForm = ({showModal,closeModal ,currentItem}) => {

  console.log(currentItem);

    return (
      <>
      <Modal show={showModal} >
      <Modal.Header closeButton onClick={closeModal}>
        <Modal.Title>{currentItem.trademarkName} {currentItem.pieces}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Количество</Form.Label>
            <Form.Control
              type="text"
              autoFocus
            />
          </Form.Group>
        
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Затвори
        </Button>
        <Button variant="primary" onClick={closeModal}>
          Добави
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
      


}
export default ProductQuantityForm