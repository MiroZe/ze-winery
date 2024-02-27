import Form from 'react-bootstrap/Form';



const EditDeclarationDeclarer = ({formValues,onChangeHandler}) => {
    

    return (
        <>
        <Form.Label >Имена</Form.Label>
        <Form.Control 
        type="text"
         onChange={(e) => onChangeHandler(e)} name='name' value={formValues.name} />
         <Form.Label>ЕГН</Form.Label>
        <Form.Control 
        type="text"
         onChange={(e) => onChangeHandler(e)} name='egn' value={formValues.egn} />
         <Form.Label>Приложени документи</Form.Label>
        <Form.Control 
        type="text"
         onChange={(e) => onChangeHandler(e)} name='description' value={formValues.description} />
         <Form.Label>Номера на приложени документи</Form.Label>
        <Form.Control 
        type="text"
         onChange={(e) => onChangeHandler(e)} name='documentNumber' value={formValues.documentNumber} />
        </>
    )


}

export default EditDeclarationDeclarer