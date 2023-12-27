import { Link } from "react-router-dom";
import styles from './Dashboard.module.css'


const Dashboard = () => {


    return (

        <div className={styles['dashboard-container']}>
            <aside>
            <ul className={styles['aside-list-items']}>
                <li><Link to={'/create-company'}>Добави компания</Link></li>
                <li><Link to={'/my-companies'}>Мои компании</Link></li>
                <li><Link to={'/products'}>Продукти</Link></li>
                <li><Link to={'/logout'}>Излез</Link></li>
            </ul>
            </aside>
        </div>

    )


}
export default Dashboard