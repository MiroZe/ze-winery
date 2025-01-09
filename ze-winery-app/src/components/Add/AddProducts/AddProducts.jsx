
import SearchBar from "../../SearchBar/SearchBar";
import { useSearch } from "../../../hooks/useSearch";
import AddProductList from "../AddProductList/AddProductList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const AddProducts = ({products}) => {

   
    
    const { found, updateSearchValue, searchValue } = useSearch(products);

   



    return (

        <div >

            <SearchBar updateSearchValue={updateSearchValue} searchValue={searchValue} />
            <Container >
                <Row className="fw-bold mb-2">
                    <Col sm={true}>Име</Col>
                    <Col sm={true}> Kод</Col>
                    <Col sm={true}>vol</Col>
                    <Col sm={true}>К-во</Col>
                    <Col sm={true}>Общо К-во</Col>
                    <Col></Col>
                    
                </Row>

                {found.map(f =>
                    <AddProductList key={f._id} product={f} />)}
            </Container >



        </div>

    )

}

export default AddProducts;