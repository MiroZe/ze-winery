import Form from 'react-bootstrap/Form';
import { useForm } from '../../../hooks/useForm';


const GoodItem = (
    {
        index,
        product,
        numberOfPackages,
        quantityOfGoods

    }
) => {


const {formValues,onChangeHandler} = useForm({numberOfPackages,quantityOfGoods})

return (

    <tr>
    <td>{index +1}</td>
    <td>{product.trademark}</td>
    <td>{product.CNCode}</td>
    <td>{product.additionalCode}</td>
    <td>{product.pieces}</td>
    <td><Form.Control type='number' name='numberOfPackages' value={formValues.numberOfPackages} onChange={onChangeHandler}/></td>
    <td><Form.Control type='number' name='quantityOfGoods' value={formValues.quantityOfGoods} onChange={onChangeHandler}/></td>
    
    
  </tr>
)

}

export default GoodItem;