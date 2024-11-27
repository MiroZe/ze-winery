


import { useState } from 'react';
import { useSelector } from 'react-redux';


export const useAddQuantityProducts = (initialState) => {

    const {currentProduct,itemPackages,itemTotalQuanity} = useSelector(state => state.add)
 

    const [updatedProduct,setUpdatetProduct] = useState(initialState);

    const addItemToAdd = () => {

       
        const alreadyAdded = updatedProduct.some((f) => f._id === currentProduct._id);

        if (alreadyAdded) {
            setUpdatetProduct((prevD) =>
                prevD.map((f) => (f.additionalCode === currentProduct.currentAdditionalCode ? { ...f, packsQuantity:f.packsQuantity + +itemPackages, quantity: f.quantity + +itemTotalQuanity } : f))
            );
        } else {

            setUpdatetProduct((prevD) => [...prevD, { ...currentProduct, quantity: +itemTotalQuanity,itemPackages,sequenceNumber:prevD.length + 1  }]);

        }
       
        



    }

    return {
        updatedProduct,
        addItemToAdd
    }
  
}