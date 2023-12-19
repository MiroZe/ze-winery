import { Link } from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {

    return (

        <div className={styles['header-container']}>
            <div>
                <p>logo</p>
            </div>
            <ul className={styles['list-items']}>
               <li><Link to={'/'}>Home</Link></li>
               <li><Link to={'/login'}>Login</Link></li>
               <li><Link to={'/register'}>Register</Link></li>
               <li><Link to={'/contacts'}>Contacts</Link></li>
            </ul>

       
        </div>
     
      
      
    )



}
export default Header