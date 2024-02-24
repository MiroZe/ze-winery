import Button from 'react-bootstrap/Button';



const ProductItem = ({
  _id, trademark, CNCode, additionalCode, pieces, viewChooseBtn,showQuantityModal
}) => {



  return (
    <tr>
      
      <td>{trademark}</td>
      <td>{CNCode}</td>
      <td>{additionalCode}</td>
      <td>{pieces}</td>

      {viewChooseBtn &&
    
        <td><Button onClick={() => showQuantityModal({_id, trademark, CNCode, additionalCode, pieces})}>
          Избери
        </Button></td>
       
        
      }
      
    </tr>

  )



}
export default ProductItem