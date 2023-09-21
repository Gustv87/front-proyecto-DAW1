import { Reserva } from './Componentes/Reserva'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';


function App() {

  return (
    <>
    <Routes>

    <Route path='/reserva' element={<Reserva />}  ></Route>
    </Routes>
             

    </>
  );
}

export default App;
