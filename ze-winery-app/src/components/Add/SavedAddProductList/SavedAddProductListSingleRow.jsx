




const SavedAddProductListSingleRow = ({addProductItem}) => {

  console.log(addProductItem);
  



return (

    <tr>
          <td>{addProductItem.sequenceNumber}</td>
          <td>{addProductItem.trademark}</td>
          <td>{addProductItem.additionalCode}</td>
          <td>{`${addProductItem.pieces} литра`}</td>
          <td>{addProductItem.itemPackages}</td>
          <td>{addProductItem.quantity}</td>
         
        </tr>

)



}


export default SavedAddProductListSingleRow;