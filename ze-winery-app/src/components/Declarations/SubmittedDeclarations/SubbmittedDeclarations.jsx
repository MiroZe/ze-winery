import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import style from './SubbmittedDeclarations.module.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCompanyDeclarations } from '../../../services/companyService';
import DeclarationList from './DeclarationList';


const SubmittedDeclarations = () => {

    const [allDeclarations,setAllDeclarations] = useState([]);
    const { companyId } = useParams();

    useEffect(()=> {
        getCompanyDeclarations(companyId)
        .then(declarations => setAllDeclarations(declarations))

    },[companyId]);
    

return (
    <Container className={style['declarations-container']}>
      <Row>
      {allDeclarations.map( d => <DeclarationList key={d._id} {...d}/>)}
      
      </Row>
     
    </Container>
)


}

export default SubmittedDeclarations