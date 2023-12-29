


const ProductItem = ({
    id,
    productName,
    quantity,
    HScode,
    additionalCode,
    pureAlcDegree,
    volume,
    packs,
    unit,
    base,
    payment,
    exciseValue}) => {

return (
    <tr>
    <td>{id}</td>
    <td>{productName}</td>
    <td>{quantity}</td>
    <td>{HScode}</td>
    <td>{additionalCode}</td>
    <td>{pureAlcDegree}</td>
    <td>{volume}</td>
    <td>{packs}</td>
    <td>{unit}</td>
    <td>{base}</td>
    <td>{payment}</td>
    <td>{exciseValue}</td>
  </tr>

)



}
export default ProductItem