import { useEffect, useState } from 'react';
import styles from './EditDeclaration.module.css'
import { getCompanyDeclarationById } from '../../../services/companyService';
import { useParams } from 'react-router-dom';
import { useErrorMessageDispatch } from '../../../hooks/useErrorMessageDispatch';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import GlassWineLoader from '../../Common/GlassWineLoader/GlassWineLoader';
import GoodItem from './GoodItem';
import EditDeclarationDeclarer from './EditDeclarationDeclarer';


const EditDeclaration = () => {

  const [currentDeclaration, setCurrentDeclaration] = useState({});
  const { declarationId } = useParams();
  const errorMessageDispatch = useErrorMessageDispatch();
  const [showLoader, setShowLoader] = useState(true);
  const [formValues, setFormValues] = useState({
    name: '',
    egn:'',
    appliedDocuments: '',
    documentNumber: ''

  });
  


  useEffect(() => {
    getCompanyDeclarationById(declarationId)
      .then(data => {
        
        setCurrentDeclaration(data);
        setFormValues(state => (
          {...state,name:data.declarer.name,
            egn: data.declarer.egn,
            appliedDocuments:data.appliedDocuments.appliedDocument.description,
            documentNumber:data.appliedDocuments.appliedDocument.documentNumber
          }))
        setShowLoader(false)

      })
      .catch(error => {
        errorMessageDispatch(error)
      })

  }, [declarationId, errorMessageDispatch,setFormValues])


const onChangeHandler = (e) => {
  setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
}



  return (
    <div className={styles['edit-declaration-container']} >
      {showLoader ? <GlassWineLoader/> : 
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
        variant='pills'
      >
        <Tab eventKey="home" title="Стоки">
         

            <Table striped bordered hover>
              <thead>
                <tr>

                  <th>#</th>
                  <th>Наименование</th>
                  <th>Код по КН</th>
                  <th>Допълнителен код</th>
                  <th>Вместимост</th>
                  <th>Брой опаковки</th>
                  <th>Количество</th>

                </tr>
              </thead>
              <tbody>
                {currentDeclaration?.exciseGoods.map((p, index) => <GoodItem
                  key={p._id} {...p}
                  index={index}

                />)}

              </tbody>
            </Table>
          
        </Tab>
        <Tab eventKey="profile" title="Декларатор">
    
          <EditDeclarationDeclarer formValues={formValues} onChangeHandler={onChangeHandler}/>
        
        </Tab>

      </Tabs>
    }
    </div>
  )


}

export default EditDeclaration;