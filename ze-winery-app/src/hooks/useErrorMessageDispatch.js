
import { useDispatch } from 'react-redux';
import { useCallback } from 'react'; // Import useCallback to memoize the action creator

import { setMessage } from '../reducers/message'; 

export const useErrorMessageDispatch = () => {
    const dispatch = useDispatch();

    
    const dispatchErrorMessage = useCallback((error) => {
        dispatch(setMessage({ type: 'error', text: error.message }));
    }, [dispatch]);

    return dispatchErrorMessage;
};
