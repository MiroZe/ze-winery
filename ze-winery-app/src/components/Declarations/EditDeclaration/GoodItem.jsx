import Form from 'react-bootstrap/Form';
import { useForm } from '../../../hooks/useForm';


const GoodItem = (
    {
    
        index,
        exciseGood,
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
            <td>{exciseGood.trademark}</td>
            <td>{exciseGood.CNCode}</td>
            <td>{exciseGood.additionalCode}</td>
            <td>{exciseGood.pieces}</td>
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