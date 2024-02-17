import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home } from './components/Home'
import { NavBar } from './components/NavBar'
import { Contacto } from './components/Contacto'
import './styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer'
import { CarrerasUniversitarias } from './components/CarrerasUniversitarias'


function App() {

  
  return (
    <>

      
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/contacto' element={ <Contacto/> }></Route>
          <Route path = '/tabla' element= {<CarrerasUniversitarias/>} ></Route>
        
        </Routes>

        <Footer></Footer>        
      </BrowserRouter>

    </>
  )
}

export default App
