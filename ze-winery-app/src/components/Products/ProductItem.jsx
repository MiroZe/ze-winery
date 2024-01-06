import Button from 'react-bootstrap/Button';



const ProductItem = ({
   
   
    trademarkName,CNCode,additionalCode,pieces,viewChooseBtn 
}) => {



return (
    <tr>
    {viewChooseBtn &&
    <td><Button>
      Избери
      </Button></td>
      }
  
    <td>{trademarkName}</td>
    <td>{CNCode}</td>
    <td>{additionalCode}</td>
    <td>{pieces}</td>
    
  </tr>

)



}
export default ProductItem