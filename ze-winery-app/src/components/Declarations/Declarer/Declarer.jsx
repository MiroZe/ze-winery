import Form from 'react-bootstrap/Form';
import { useForm } from '../../../hooks/useForm';



const Declarer = ({ declarerData }) => {

     const {formValues, onChangeHandler} = useForm({
        names: declarerData.ownerNames || '' ,
        id : declarerData.ownerId
     })


  
   
    return (

    <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
               
                <Form.Label>Имена</Form.Label>
                <Form.Control type="text" placeholder="Ivan Ivanov" name='names' value={formValues.names} onChange={onChangeHandler}/>
                <Form.Label>ЕГН</Form.Label>
                <Form.Control type="text" placeholder="2525252525" name='id' value={formValues.id} onChange={onChangeHandler}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Начална дата</Form.Label>
                <Form.Control type="date" name='startDate' data-date-format ="YYYY/MM/DD"/>
                <Form.Label>Крайна дата</Form.Label>
                <Form.Control type="date"  name="endDate"/>
               
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Тип на документа</Form.Label>
                <Form.Control type="text" defaultValue={40} disabled />
                <Form.Label>Описание на документите</Form.Label>
                <Form.Control type="text" placeholder='from N:100 to N:110' />
            </Form.Group>
            
                </Form>

      
    )


}

export default Declarer