


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteCompanyDeclarationById } from '../../../services/companyService';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteConfirmationModal = ({id,showModal,showHideDeleteModal}) => {

  const navigate = useNavigate();
  const {companyId} = useParams();


  const deleteDeclarationHandler = async (id) => {
    try {
        await deleteCompanyDeclarationById(id);
        navigate(`/my-companies/${companyId}/my-declarations`)
    
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