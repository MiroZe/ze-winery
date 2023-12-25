
import './App.css'
import LoginForm from './components/LoginForm/LoginForm';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import CreateCompany from './components/CreateCompany/CreateCompany';
import MyCompanies from './components/MyCompanies/MyCompanies';

function App() {


  return (
    <>

      <Header />
      <Routes>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/create-company' element={<CreateCompany/>}/>
        <Route path='/my-companies' element={<MyCompanies/>}/>


      </Routes>
      <Footer/>

    </>



  )
}

export default App
