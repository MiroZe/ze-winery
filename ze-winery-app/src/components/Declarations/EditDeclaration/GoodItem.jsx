


const GoodItem = (
    {
        index,
        product,
        numberOfPackages,
      
        quantityOfGoods

    }
) => {


return (

    <tr>
    <td>{index +1}</td>
    <td>{product.trademark}</td>
    <td>{product.CNCode}</td>
    <td>{product.additionalCode}</td>
    <td>{product.pieces}</td>
    <td>{numberOfPackages}</td>
    <td>{quantityOfGoods}</td>
    
  </tr>
)

}

export default GoodItem;