import { useEffect,  useState } from 'react';
import styles from './EditDeclaration.module.css'
import { getCompanyDeclarationById } from '../../../services/companyService';
import { useParams } from 'react-router-dom';
import { useErrorMessageDispatch } from '../../../hooks/useErrorMessageDispatch';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const EditDeclaration = () => {

    const [currentDeclaration,setCurrentDeclaration]= useState({});
    const {declarationId} = useParams();
    const errorMessageDispatch = useErrorMessageDispatch();
    const [key, setKey] = useState('goods');
   
    

    useEffect (() => {
        getCompanyDeclarationById(declarationId)
        .then( data => {
            setCurrentDeclaration(data)
            
        })
        .catch(error => {
            errorMessageDispatch(error)
        })

    },[declarationId,errorMessageDispatch])

    
return (
    <div className={styles['edit-declaration-container']}>
       
       <Tabs
     
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    variant='pills'
     
    >
      <Tab eventKey="goods" title="Стоки" >
        Tab content for Home
      </Tab>
      <Tab eventKey="declarer" title="Декларатор">
        Tab content for Profile
      </Tab>
     
    </Tabs>
    
    </div>
)


}

export default EditDeclaration;