import Form from 'react-bootstrap/Form';



const Declarer = ({ formValues,onChangeHandler }) => {


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
                <Form.Control type="date" name='startDate' value={formValues.startDate} onChange={onChangeHandler}/>
                <Form.Label>Крайна дата</Form.Label>
                <Form.Control type="date"  name="endDate" value={formValues.endDate} onChange={onChangeHandler}/>
               
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Описание на документите</Form.Label>
                <Form.Control type="text" 
                placeholder='from N:100 to N:110'
                name='appliedDocumentDescription'
                value={formValues.appliedDocumentDescription}
                onChange={onChangeHandler}
                />
            </Form.Group>
            
                </Form>

      
    )


}

export default Declarer