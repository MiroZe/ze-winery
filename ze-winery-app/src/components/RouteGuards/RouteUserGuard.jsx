import { Navigate, Outlet } from "react-router-dom";
import {  useSelector } from 'react-redux';
import { useErrorMessageDispatch } from '../../hooks/useErrorMessageDispatch';

const RouteUserGuard = ({
    children,
}) => {
    
    const dispatchErrorMessage = useErrorMessageDispatch();
    const {user} = useSelector(state => state.user);
    const error = {message : 'You do not have access to this resources.Please log in!'}
   
    
    if (!user._id) {
        dispatchErrorMessage(error);
        return <Navigate to="/login" />;
    }
  

    return children ? children : <Outlet />
};

export default RouteUserGuard