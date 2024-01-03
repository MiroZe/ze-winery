import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import { useSelector } from 'react-redux';

const Header = () => {

    const {username} = useSelector(state => state.user);
    

    return (

        <div className={styles['header-container']}>
            <div>
                <p>logo</p>
                
            </div>
            <p>Welcome { username || 'Guest'}</p>
            <ul className={styles['list-items']}>
               <li><Link to={'/'}>Home</Link></li>
               {username && 
               <>
               <li><Link to={'/dashboard'}>Табло</Link></li>
               <li><Link to={'/logout'}>Излез</Link></li>
               </>
            }
            {!username && 
            <>
               <li><Link to={'/login'}>Login</Link></li>
               <li><Link to={'/register'}>Register</Link></li>
               </>
            }
               <li><Link to={'/contacts'}>Контакти</Link></li>
            </ul>

       
        </div>
     
      
      
    )



}
export default Header