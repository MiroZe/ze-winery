
import style from './SubbmittedDeclarations.module.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCompanyDeclarations } from '../../../services/companyService';
import DeclarationList from './DeclarationList';
import Accordion from 'react-bootstrap/Accordion';


const SubmittedDeclarations = () => {

    const [allDeclarations,setAllDeclarations] = useState([]);
    const { companyId } = useParams();

    useEffect(()=> {
        getCompanyDeclarations(companyId)
        .then(declarations => setAllDeclarations(declarations))

    },[companyId]);
    

return (
    <Accordion defaultActiveKey="0" flush className={style['declarations-container']}>

      {allDeclarations.map( d => <DeclarationList key={d._id} {...d}/>)}
      
  

    </Accordion>
)


}

export default SubmittedDeclarations