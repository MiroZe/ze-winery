import Form from 'react-bootstrap/Form';
import { useForm } from '../../../hooks/useForm';


const GoodItem = (
    {
    
        index,
        product,
        numberOfPackages,
        quantityOfGoods,
        onUpdate

    }
) => {

  


    const { formValues, onChangeHandler } = useForm({ numberOfPackages, quantityOfGoods })

    const handleUpdate = () => {
        onUpdate({
            numberOfPackages: Number(formValues.numberOfPackages),
            quantityOfGoods: Number(formValues.quantityOfGoods)
        });
    };

    return (

        <tr>
            <td>{index + 1}</td>
            <td>{product.trademark}</td>
            <td>{product.CNCode}</td>
            <td>{product.additionalCode}</td>
            <td>{product.pieces}</td>
            <td><Form.Control type='number' name='numberOfPackages'
                value={formValues.numberOfPackages}
                onChange={onChangeHandler}
                onBlur={handleUpdate }
            /></td>
            <td><Form.Control type='number' name='quantityOfGoods' 
            value={formValues.quantityOfGoods}
             onChange={onChangeHandler}
             onBlur={handleUpdate }
             /></td>


        </tr>
    )

}

export default GoodItem;