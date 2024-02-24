import { useEffect, useState } from 'react';
import DeclarationList from '../DeclarationItems/DeclarationList';
import styles from './EditDeclaration.module.css'
import { getCompanyDeclarationById } from '../../../services/companyService';
import { useParams } from 'react-router-dom';
import { useErrorMessageDispatch } from '../../../hooks/useErrorMessageDispatch';


const EditDeclaration = () => {

    const [currentDeclaration,setCurrentDeclaration]= useState({});
    const {declarationId} = useParams();
    const errorMessageDispatch = useErrorMessageDispatch();
    
   
 

    useEffect (() => {
        getCompanyDeclarationById(declarationId)
        .then( setCurrentDeclaration)
        .catch(error => {
            errorMessageDispatch(error)
        })

    },[declarationId,errorMessageDispatch])

    console.log(currentDeclaration);
return (
    <div className={styles['edit-declaration-container']}>
       
       <p>test</p>
    </div>
)


}

export default EditDeclaration;