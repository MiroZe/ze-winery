import { useState } from 'react';
import ProductsList from '../../Products/ProductsList'
import DeclarationList from '../DeclarationItems/DeclarationList'
import styles from './CreateDeclaration.module.css'
import ProductQuantityForm from '../../Products/ProductQuantityForm/ProductQuantityForm';
import { useDispatch, useSelector } from 'react-redux';
import {setDeclarationDraft} from '../../../reducers/declarationDraft'



const CreateDecration = () => {
    const viewChooseBtn = true;
    const [declarationItems, setDeclarationItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentItem, setCurrentItem] = useState({});
    const [isItemSelected, setisItemSelected] = useState(false);
    const dispatch = useDispatch();
    const {declarationDraft} = useSelector(state => state.declarationDraft);
   

    const showQuantityModal = (data) => {
        setShowModal(true);
        setCurrentItem(data)
    }
    const addItemToDeclaration = (packsQuantity,itemQuantity) => {

       
        setisItemSelected(true);
   

        const alreadyAdded = declarationItems.some((f) => f._id === currentItem._id);

        if (alreadyAdded) {
            setDeclarationItems((prevD) =>
                prevD.map((f) => (f.additionalCode === currentItem.additionalCode ? { ...f, packsQuantity:f.packsQuantity + +packsQuantity, quantity: f.quantity + +itemQuantity } : f))
            );
        } else {

            setDeclarationItems((prevD) => [...prevD, { ...currentItem, quantity: +itemQuantity,packsQuantity,sequenceNumber:prevD.length + 1  }]);

        }
        dispatch(setDeclarationDraft(declarationItems));
        



    }

    const deleteItemFromDecalarationList = (id) => {

        setDeclarationItems(prevState => prevState.filter(f => f._id !== id))

    };

    const loadDraftDeclaration = () => {
        setDeclarationItems(declarationDraft)
       
    
      }
    

  

    const closeModal = () => setShowModal(false);
    return (

        <div className={styles['create-declaration-container']}>
            {showModal && <ProductQuantityForm
                showModal={showModal}
                closeModal={closeModal}
                currentItem={currentItem}
                addItemToDeclaration={addItemToDeclaration}
              />}
           
            <ProductsList viewChooseBtn={viewChooseBtn} 
            showQuantityModal={showQuantityModal}
             isItemSelected={isItemSelected} />
            <div className={styles['declaration-container']}>
                
            <DeclarationList
                declarationItems={declarationItems}
                deleteItemFromDecalarationList={deleteItemFromDecalarationList}
                loadDraftDeclaration = {loadDraftDeclaration}
               />

               </div>

        </div>

    )



}
export default CreateDecration