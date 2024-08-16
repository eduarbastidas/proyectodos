import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pegas/Home'
import Pagina from './componente/Pagina'



const App = () => {
  return (
    <div><BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path='/Pagina' element={<Pagina/>}/>
      </Routes>
    </BrowserRouter></div>
  )
}

export default App