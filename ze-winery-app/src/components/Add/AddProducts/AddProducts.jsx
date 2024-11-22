
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
                    <Col>Име</Col>
                    <Col>Доп.код</Col>
                    <Col>Вместимост</Col>
                    <Col>К-во</Col>
                    <Col>Общо К-во</Col>
                    <Col></Col>
                    
                </Row>

                {found.map(f =>
                    <AddProductList key={f._id} products={f} />)}
            </Container >



        </div>

    )

}

export default AddProducts;