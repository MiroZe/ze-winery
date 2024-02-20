
import style from './SubbmittedDeclarations.module.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCompanyDeclarations } from '../../../services/companyService';
import DeclarationList from './DeclarationList'
import Accordion from 'react-bootstrap/Accordion';
import GlassWineLoader from '../../Common/GlassWineLoader/GlassWineLoader';


const SubmittedDeclarations = () => {

    const [allDeclarations,setAllDeclarations] = useState([]);
    const [isLoader, setIsLoader] = useState(true)
    const { companyId } = useParams();

    useEffect(()=> {
        getCompanyDeclarations(companyId)
        .then(declarations => {
            setAllDeclarations(declarations);
            setIsLoader(false)
        } )

    },[companyId]);
    

return (
    <>
    {isLoader && <GlassWineLoader/>}
    <Accordion flush className={style['declarations-container']}>
    {allDeclarations.length === 0 ? <p>Все още няма подадени деклaрации!</p> : 

      allDeclarations.map( d => <DeclarationList key={d._id} {...d}/>)}
    
    </Accordion>
    </>
)


}

export default SubmittedDeclarations