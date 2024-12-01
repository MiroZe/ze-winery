

import { useSelector } from 'react-redux';


export const useAddProducts = (addProducts,setAddProduct) => {

    const {currentProduct,itemPackages,itemTotalQuanity} = useSelector(state => state.add)
 


    

    const addItemToAdd = () => {

       
        const alreadyAdded = addProducts.some((f) => f._id === currentProduct._id);

        if (alreadyAdded) {
         
            
            setAddProduct((prevD) =>
                prevD.map((f) => (f.additionalCode === currentProduct.currentAdditionalCode ? { ...f, packsQuantity:f.packsQuantity + +itemPackages, quantity: f.quantity + +itemTotalQuanity } : f))
            );
        } else {
        
            
            
            setAddProduct((prevD) => [...prevD, { ...currentProduct, quantity: +itemTotalQuanity,itemPackages,sequenceNumber:prevD.length + 1  }]);

        }
       
        

       
        

    }

    return {
        
        addItemToAdd
    }
  
}