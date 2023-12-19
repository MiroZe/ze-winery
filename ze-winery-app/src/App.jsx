
import './App.css'
import LoginForm from './components/LoginForm/LoginForm';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>

      <Header />
      <Routes>
        <Route path='/login' element={<LoginForm/>}/>


      </Routes>

    </>



  )
}

export default App
