
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

console.log(user?._id);

return (

    <div className={styles['companies-container']}>
    {myCompanies.map( c => <CompanyCard key={c._id} {...c}/>)}

    </div>
  
)



}
export default MyCompanies