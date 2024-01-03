import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducers/users";
import { useEffect } from "react";
import { userLogout } from "../../services/authService";



const Logout = () => {


    const dispatch = useDispatch();
    useEffect(() => {
        userLogout()
            .then(dispatch(setUser({})))
            .catch(err => console.log(err))
    }, [dispatch])


    return <Navigate to='/' />

}


export default Logout