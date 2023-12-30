


const ProductItem = ({
    id,
    trademarkName,
    CNCode,
   additionalCode,
    pieces
}) => {

return (
    <tr>
    <td>{id}</td>
  
    <td>{trademarkName}</td>
    <td>{CNCode}</td>
    <td>{additionalCode}</td>
    <td>{pieces}</td>
    
  </tr>

)



}
export default ProductItem