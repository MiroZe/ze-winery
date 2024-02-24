
import './App.css'
import LoginForm from './components/LoginForm/LoginForm';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import CreateCompany from './components/Companies/CreateCompany/CreateCompany';
import MyCompanies from './components/Companies/MyCompanies/MyCompanies';
import ProductsList from './components/Products/ProductsList';
import CreateProduct from './components/Products/CreateProduct/CreateProduct';
import { Provider } from 'react-redux';
import store from './redux';
import HomePage from './components/HomePage/HomePage';
import Logout from './components/Logout/Logout';
import CompanyDetails from './components/Companies/CompanyDetails/CompanyDetails';
import CreateDecration from './components/Declarations/CreateDeclaration/CreateDeclaration';
import SubmittedDeclarations from './components/Declarations/SubmittedDeclarations/SubbmittedDeclarations';
import EditDeclaration from './components/Declarations/EditDeclaration/EditDeclaration';

function App() {


  return (
    <>
    <Provider store={store}>
      <Header />
      <Routes>

        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/create-company' element={<CreateCompany/>}/>
        <Route path='/my-companies' element={<MyCompanies/>}/>
        <Route path='/my-companies/:companyId/products' element={<ProductsList/>}/>
        <Route path='/create-product' element={<CreateProduct/>}/>
        <Route path='/my-companies/:companyId' element={<CompanyDetails/>}/>
        <Route path='/my-companies/:companyId/create-declaration' element={<CreateDecration/>}/>
        <Route path='/my-companies/:companyId/edit-declaration/:declarationId' element={<EditDeclaration/>}/>
        <Route path='/my-companies/:companyId/my-declarations' element={<SubmittedDeclarations/>}/>


      </Routes>
      <Footer/>

    </Provider>
    </>



  )
}

export default App
