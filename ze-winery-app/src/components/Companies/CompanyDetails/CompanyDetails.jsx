
import { useEffect, useState } from 'react';
import styles from './CompanyDetails.module.css';
import { useParams } from 'react-router-dom';
import { getCompanyById } from '../../../services/companyService';
import { useDispatch } from 'react-redux';
import { setCompany } from '../../../reducers/company';
import CompanyCard from '../MyCompanies/CompanyCard';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BackButton from '../../Common/BackButton/BackButton';


const CompanyDetails = () => {

    const { companyId } = useParams();
    const dispatch = useDispatch();
    const [hidebtn, sethideBtn] = useState(false)



    useEffect(() => {
        getCompanyById(companyId)
            .then(company => {
                sethideBtn(true)
                dispatch(setCompany(company))
            })
            .catch(error => console.log(error))
    }, [dispatch, companyId])

    const company = useSelector(state => state.company);


    return (
        <div className={styles['company-container']}>

            <CompanyCard {...company} hidebtn={hidebtn} />
            <div className={styles['button-container']}>
                <Button as={Link} to={`/my-companies/${companyId}/products`} variant="primary">Продукти</Button>
                <Button as={Link} to={`/my-companies/${companyId}/createAdd`} variant="primary">Създай АДД</Button>
                <Button as={Link} to={`/my-companies/${companyId}/create-declaration`}variant="primary">Създай декларация</Button>
                <Button as={Link} to={`/my-companies/${companyId}/my-declarations`} variant="primary">Подадени декларации</Button>
            </div>
            <BackButton path={'/dashboard'}/>
        </div>
    )


}
export default CompanyDetails