
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getMyCompanies } from '../../../services/companyService';
import CompanyCard from './CompanyCard';
import styles from './MyCompanies.module.css';
import { setMessage } from '../../../reducers/message';




const MyCompanies = () => {

  const [myCompanies,setMyCompanies] = useState([]);
  const dispatch = useDispatch();

  

const {user} = useSelector(state => state.user);
useEffect(() => {
  getMyCompanies(user?._id)
  .then(setMyCompanies)
  .catch((error) => {
    if(error.message === 'Invalid token!') {
      error.message = 'Моля, впишете се отново!'
    }
    dispatch(setMessage({type:'error', text: error.message}))
    console.log(error);
  })
  
  
},[user?._id,dispatch]);



return (

    <div className={styles['companies-container']}>
      
    {myCompanies.length > 0 ? myCompanies.map( c => <CompanyCard key={c._id} {...c}/>) :
    <h3>Все още нямате регистрирана компания!</h3>}

    </div>
  
)



}
export default MyCompanies