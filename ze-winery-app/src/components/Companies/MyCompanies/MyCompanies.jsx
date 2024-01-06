
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getMyCompanies } from '../../../services/companyService';
import CompanyCard from './CompanyCard';
import styles from './MyCompanies.module.css'


const MyCompanies = () => {

  const [myCompanies,setMyCompanies] = useState([])

const {user} = useSelector(state => state.user);
useEffect(() => {
  getMyCompanies(user?._id).then(setMyCompanies)
  
},[user?._id])

return (

    <div className={styles['companies-container']}>
    {myCompanies.map( c => <CompanyCard key={c._id} {...c}/>)}

    </div>
  
)



}
export default MyCompanies