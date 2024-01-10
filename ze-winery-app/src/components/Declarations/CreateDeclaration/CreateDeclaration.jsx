import { useState } from 'react';
import ProductsList from '../../Products/ProductsList'
import DeclarationItems from '../DeclarationItems/DeclarationItems'
import styles from './CreateDeclaration.module.css'
import ProductQuantityForm from '../../Products/ProductQuantityForm/ProductQuantityForm';



const CreateDecration = () => {
    const viewChooseBtn = true;
    const [declarationItems, setDeclarationItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentItem,setCurrentItem] = useState({})

    const showQuantityModal = (data) => {
        setShowModal(true);
        setCurrentItem(data)
    }

    const addItemTodeclaration = (data) => {

        console.log(data);

    }

    const closeModal = () => setShowModal(false);
return (

    <div className={styles['declaration-container']}>
        {showModal && <ProductQuantityForm showModal={showModal} closeModal={closeModal} currentItem={currentItem} />}
        <ProductsList viewChooseBtn={viewChooseBtn} showQuantityModal={showQuantityModal}/>
        <DeclarationItems/>


    </div>

)



}
export default CreateDecration