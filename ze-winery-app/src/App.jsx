
import './App.css'
import LoginForm from './components/LoginForm/LoginForm';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Dashboard from './components/Dashboard/Dashboard';

function App() {


  return (
    <>

      <Header />
      <Routes>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>


      </Routes>

    </>



  )
}

export default App
