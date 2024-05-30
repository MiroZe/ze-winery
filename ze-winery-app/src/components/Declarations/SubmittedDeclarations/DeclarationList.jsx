import styles from './SubbmittedDeclarations.module.css';
import { faCircleInfo, faFileCode, faFilePen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getCompanyDeclarationById, getCompanyXMLDeclarationById } from '../../../services/companyService';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import DeleteConfirmationModal from '../../Common/DeleteConfirmationModal/DeleteConfirmationModal';
import TooltipComponent from '../../Common/Tooltip/Tooltip';

const DeclarationList = ({ _id, year, month,setAllDeclarations }) => {

    const [currentDeclaration, setCurrentDeclaration] = useState({});
    const navigate = useNavigate();
    const { companyId } = useParams();
    const [showModal, setShowModal] = useState(false);

    const showHideDeleteModal = () => {
        setShowModal(!showModal)
    }


    const declarationByIdHandler = async (id) => {
        try {

            const declaration = await getCompanyDeclarationById(id);
            setCurrentDeclaration(declaration)


        } catch (error) {
            console.log(error);
        }
    }

    const xmlDeclarationHandler = async (id) => {
        try {
            const response = await getCompanyXMLDeclarationById(id);

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${month}${year}.xml`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);

        } catch (error) {
            console.log(error);
        }
    }

    const linkTo = (declarationId) => {
        navigate(`/my-companies/${companyId}/edit-declaration/${declarationId}`)
    }




    return (
        <Accordion.Item className={styles['column']}>
            <Accordion.Header>{year} {month}</Accordion.Header>
            <Accordion.Body>
                <TooltipComponent text={'Информация'}>
                    <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#42777B", marginRight: '12px' }} size='xl' onClick={() => declarationByIdHandler(_id)} />
                </TooltipComponent>
                <TooltipComponent text={'Изтегли'}>
                    <FontAwesomeIcon icon={faFileCode} style={{ color: "#42777B", }} size='xl' onClick={() => xmlDeclarationHandler(_id)} />
                </TooltipComponent>
                {currentDeclaration.createdAt && <>
                    <p>Подадена на: <span>{currentDeclaration.createdAt}</span></p>
                    <p>Приложени документи: <span>{currentDeclaration?.appliedDocuments.appliedDocument.description}</span></p>
                    <p>Номера на документи: <span>{currentDeclaration?.appliedDocuments.appliedDocument.documentNumber}</span></p>
                </>}
                <TooltipComponent text={'Редактирай'}>
                    <FontAwesomeIcon icon={faFilePen} style={{ color: "#42777B", marginLeft: '12px' }} size='xl' onClick={() => linkTo(_id)} />
                </TooltipComponent>
                <TooltipComponent text={'Изтрий'}>
                    <FontAwesomeIcon icon={faTrash} style={{ color: "#42777B", marginLeft: '12px' }} size='xl' onClick={() => showHideDeleteModal()} />
                </TooltipComponent>
                {showModal && <DeleteConfirmationModal 
                            id={_id} showModal={showModal}
                             showHideDeleteModal={showHideDeleteModal}
                             setAllDeclarations={setAllDeclarations} />}
            </Accordion.Body>

        </Accordion.Item>
    )


}

export default DeclarationList