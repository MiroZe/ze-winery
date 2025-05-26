import { useSelector } from 'react-redux';
import styles from './CreateAdd.module.css';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ClientForm from './ClientForm';
import { useEffect, useState } from 'react';
import { getCompanyProducts } from '../../../services/productService';
import { useParams } from "react-router-dom";
import SavedAddProductList from '../SavedAddProductList/SaveAddProductList';




const CreateAdd = () => {

    const company = useSelector(state => state.company);
   
    const [allCompanyProducts, setAllCompanyProducts] = useState([]);
    const [showAddSummaryProductList, setShowAddSummaryProductList]= useState(false)

 
    const { companyId } = useParams();

    const showAddProductListTable = () => {

        setShowAddSummaryProductList(true)
    }



    useEffect(() => {

        getCompanyProducts(companyId)
            .then(setAllCompanyProducts)
            .catch(err => console.log(err))


    }, [companyId]);


    return (
        <div className={styles['add-container']}>
        <div className={styles['add-form-container']}>
            <ClientForm id={company._id} products={allCompanyProducts} showAddProductListTable={showAddProductListTable}/>

          
            <h3>Номер</h3>
            <div className={styles['company-container']}>
                <h5>Издател</h5>
                <Form>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label="Име">
                            <Form.Control type="text" disabled defaultValue={`${company.companyName} ${company.companyType}`} />
                        </FloatingLabel>
                        <FloatingLabel label='ЕИК'>
                            <Form.Control type="text" disabled defaultValue={company.companyId} />
                        </FloatingLabel>
                        <FloatingLabel label='Адрес'>
                            <Form.Control type="text" disabled defaultValue={company.address} />
                        </FloatingLabel>
                        <FloatingLabel label='Град'>
                            <Form.Control type="text" disabled defaultValue={company.city} />
                        </FloatingLabel>
                    </Form.Group>
                </Form>
            </div>
         
          
        </div>
        {showAddSummaryProductList && <SavedAddProductList/>}
        
      
        </div>
    )


};

export default CreateAdd;