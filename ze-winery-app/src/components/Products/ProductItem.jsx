import Button from 'react-bootstrap/Button';



const ProductItem = ({
  trademarkName, CNCode, additionalCode, pieces, viewChooseBtn,showQuantityModal
}) => {



  return (
    <tr>
      {viewChooseBtn &&
        <td><Button onClick={() => showQuantityModal()}>
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