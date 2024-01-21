



const DeclarationItem = ({index, trademarkName,CNCode,additionalCode,pieces,quantity}) => {

console.log(quantity);

return (
    <tr>
    <td>{index +1}</td>
    <td>{trademarkName}</td>
    <td>{CNCode}</td>
    <td>{additionalCode}</td>
    <td>{pieces}</td>
    <td>{quantity}</td>
  </tr>
)

}

export default DeclarationItem