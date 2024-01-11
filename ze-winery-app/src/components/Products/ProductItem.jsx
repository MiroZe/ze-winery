import Button from 'react-bootstrap/Button';



const ProductItem = ({
  _id, trademarkName, CNCode, additionalCode, pieces, viewChooseBtn,showQuantityModal,isItemSelected
}) => {



  return (
    <tr>

      <td>{trademarkName}</td>
      <td>{CNCode}</td>
      <td>{additionalCode}</td>
      <td>{pieces}</td>

      {viewChooseBtn &&
    
        <td><Button onClick={() => showQuantityModal({_id, trademarkName, CNCode, additionalCode, pieces})}>
          Избери
        </Button></td>
       
        
      }
      {isItemSelected && <td>0</td>}
    </tr>

  )



}
export default ProductItem