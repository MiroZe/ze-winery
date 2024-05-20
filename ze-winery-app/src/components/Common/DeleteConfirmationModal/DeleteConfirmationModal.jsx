


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteCompanyDeclarationById } from '../../../services/companyService';

const DeleteConfirmationModal = ({id,showModal,showHideDeleteModal,setAllDeclarations}) => {

  
  


  const deleteDeclarationHandler = async (id) => {
    try {
        await deleteCompanyDeclarationById(id);
        showHideDeleteModal();
        setAllDeclarations(prevState => prevState.filter(d => d._id !== id ))
        
    
      } catch (error) {
          console.log(error);
      }
  }

  return (
    <>

      <Modal show={showModal} onHide={showHideDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Предстои изтриване!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Сигурни ли сте,че искате да изтриете тази декларация?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={showHideDeleteModal}>
            Отказ
          </Button>
          <Button variant="primary" onClick={() => deleteDeclarationHandler(id) }>
            Изтрий
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteConfirmationModal;