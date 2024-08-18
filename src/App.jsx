import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pegas/Home'
import Pagina from './componente/Pagina'
import Reserva from './componente/Reserva'




const App = () => {
  return (
    <div><BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Pagina' element={<Pagina/>}/>
        <Route path="/Reserva" element={<Reserva />} />
      </Routes>
    </BrowserRouter></div>
  )
}

export default App