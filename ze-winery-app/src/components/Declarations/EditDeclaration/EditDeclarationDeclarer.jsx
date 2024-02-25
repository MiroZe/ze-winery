import Form from 'react-bootstrap/Form';



const EditDeclarationDeclarer = ({formValues,onChangeHandler}) => {
    

    return (
        <>
        <Form.Label>Имена</Form.Label>
        <Form.Control 
        type="text"
         onChange={(e) => onChangeHandler(e)} name='name' value={formValues.name} />
        </>
    )


}

export default EditDeclarationDeclarer