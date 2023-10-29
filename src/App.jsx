import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/pages/home/Home'
import Formulario from './component/pages/formulario/Formulario'
import Login from './component/pages/login/Login'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Formulario/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='home' element={<Home/>}/>
      {/* sada] */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
