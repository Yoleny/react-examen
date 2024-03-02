import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import { Home } from './components/Home'
import { Registro } from './components/Registro'
import { NavBar } from './components/NavBar'
import { InicioSesion } from './components/InicioSecion'
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
          <Route path='/registro' element = {<Registro/>}></Route>
          <Route path='/inicio' element= {<InicioSesion/>}></Route>
          <Route path = '/tabla' element= {<CarrerasUniversitarias/>} ></Route>
        
        </Routes>

        <Footer></Footer>        
      </BrowserRouter>

    </>
  )
}

export default App
