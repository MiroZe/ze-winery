import { useState } from 'react';
import ProductsList from '../../Products/ProductsList'
import DeclarationItems from '../DeclarationItems/DeclarationItems'
import styles from './CreateDeclaration.module.css'
import ProductQuantityForm from '../../Products/ProductQuantityForm/ProductQuantityForm';



const CreateDecration = () => {
    const viewChooseBtn = true;
    const [declarationItems, setDeclarationItems] = useState([]);
    const [showModal, setShowModal] = useState(false)

    const showQuantityModal = () => {
        setShowModal(true)
    }

    const closeModal = () => setShowModal(false);
return (

    <div className={styles['declaration-container']}>
        {showModal && <ProductQuantityForm showModal={showModal} closeModal={closeModal}/>}
        <ProductsList viewChooseBtn={viewChooseBtn} showQuantityModal={showQuantityModal}/>
        <DeclarationItems/>


    </div>

)



}
export default CreateDecration