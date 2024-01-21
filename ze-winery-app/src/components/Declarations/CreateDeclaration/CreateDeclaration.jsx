import { useState } from 'react';
import ProductsList from '../../Products/ProductsList'
import DeclarationList from '../DeclarationItems/DeclarationList'
import styles from './CreateDeclaration.module.css'
import ProductQuantityForm from '../../Products/ProductQuantityForm/ProductQuantityForm';



const CreateDecration = () => {
    const viewChooseBtn = true;
    const [declarationItems, setDeclarationItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentItem,setCurrentItem] = useState({});
    const [isItemSelected,setisItemSelected] = useState(false);

    const showQuantityModal = (data) => {
        setShowModal(true);
        setCurrentItem(data)
    }
    const addItemToDeclaration = (itemQuantity) => {
        setisItemSelected(true);
        
        
            const alreadyAdded = declarationItems.some((f) => f.additionalCode === currentItem.additionalCode);
    
            if (alreadyAdded) {
                setDeclarationItems((prevD) =>
                    prevD.map((f) => (f.additionalCode === currentItem.additionalCode ? { ...f, quantity: f.quantity + +itemQuantity } : f))
                );
            } else {

                
                setDeclarationItems((prevD) => [...prevD, { ...currentItem, quantity: +itemQuantity }]);

                    
                
            }
        

    }
    
  
console.log(declarationItems);
    
      
    const closeModal = () => setShowModal(false);
return (

    <div className={styles['declaration-container']}>
        {showModal && <ProductQuantityForm showModal={showModal} closeModal={closeModal} currentItem={currentItem} addItemToDeclaration={addItemToDeclaration} />}
        <ProductsList viewChooseBtn={viewChooseBtn} showQuantityModal={showQuantityModal} isItemSelected={isItemSelected}/>
        <DeclarationList declarationItems= {declarationItems}/>


    </div>

)



}
export default CreateDecration