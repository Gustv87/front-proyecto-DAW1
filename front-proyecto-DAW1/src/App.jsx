import { Reserva } from './Componentes/Reserva'
import { useState } from 'react';


function App() {

  return (
    <>
             <Route path='/reserva' element={<Reserva />}  ></Route>

    </>
  )
}

export default App
