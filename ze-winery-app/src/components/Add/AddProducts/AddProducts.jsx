import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompanyProducts } from "../../../services/productService";
import SearchBar from "../../SearchBar/SearchBar";
import { useSearch } from "../../../hooks/useSearch";
import AddProductList from "../AddProductList/AddProductList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const AddProducts = () => {

    const { companyId } = useParams();
    const [products, setProducts] = useState([]);
    const { found, updateSearchValue, searchValue } = useSearch(products);

    useEffect(() => {

        getCompanyProducts(companyId)
            .then(setProducts)
            .catch(err => console.log(err))


    }, [companyId])



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
                    <AddProductList key={f._id} product={f} />)}
            </Container >



        </div>

    )

}

export default AddProducts;