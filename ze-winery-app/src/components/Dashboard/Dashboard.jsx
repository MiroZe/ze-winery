import { Link } from "react-router-dom"


const Dashboard = () => {


    return (

        <div>
            <aside>
            <ul>
                <li><Link to={'/add-company'}>Добави компания</Link></li>
                <li><Link to={'/products'}>Продукти</Link></li>
                <li><Link to={'/logout'}>Излез</Link></li>
            </ul>
            </aside>
        </div>

    )


}
export default Dashboard