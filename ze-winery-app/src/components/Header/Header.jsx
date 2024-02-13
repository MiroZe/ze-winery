import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import { useSelector } from 'react-redux';
import logo from '../../assets/logo_transparent.png'
import MessageBanner from '../Message/MessageBannes';

const Header = () => {

    const {user} = useSelector(state => state.user);
   //  const {message,isMessage} = useSelector(state => state.message);
   //  console.log(isMessage);
    
  
    const username = user?.username;
   

    return (

        <div className={styles['header-container']}>
             <div className="logo">
            <Link to="/">
            <img src={logo} alt="Logo" />
            </Link>
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
            <MessageBanner/>
       
        </div>
     
      
      
    )



}
export default Header