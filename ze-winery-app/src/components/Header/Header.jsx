import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import { useSelector } from 'react-redux';
import logo from '../../assets/logo_transparent.png'
import MessageBanner from '../Message/MessageBannes';

const Header = () => {

    const {user} = useSelector(state => state.user);
    const {companyName,companyType} = useSelector(state => state.company)

  
    const username = user?.username;
    
   

    return (

        <div className={styles['header-container']}>
             <div className="logo">
            <Link to="/">
            <img src={logo} alt="Logo" />
            </Link>
      </div>
            <p>Welcome { username || 'Guest'}</p>
            <p>{companyName ? `${companyName} ${companyType}` : ''}</p>
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
               
            </ul>
            <MessageBanner/>
       
        </div>
     
      
      
    )



}
export default Header