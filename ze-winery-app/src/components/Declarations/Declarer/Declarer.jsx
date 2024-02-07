import Form from 'react-bootstrap/Form';



const Declarer = () => {


return (

    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Имена</Form.Label>
      <Form.Control type="text" placeholder="Ivan Ivanov" />
      <Form.Label>ЕГН</Form.Label>
      <Form.Control type="text" placeholder="2525252525" />
    </Form.Group>
    <Form.Group>
    <Form.Label>Начална дата</Form.Label>
    <Form.Control type="date" placeholder="01-01-2024" />
    <Form.Label>Крайна дата</Form.Label>
    <Form.Control type="date" placeholder="01-01-2024" />
    </Form.Group>
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Тип на документа</Form.Label>
      <Form.Control type="text" defaultValue={40} disabled/>
      <Form.Label>Описание на документите</Form.Label>
      <Form.Control type="text" placeholder='from N:100 to N:110' />
    </Form.Group>
 
  </Form>
)


}

export default Declarer