import { Reserva } from './Componentes/Reserva'
import { useState } from 'react';


function App() {

  const [inicioSesion, setInicioSesion] = useState(false);
  const [id_rol, setId_rol] = useState(0);


  const onInicioSesion = (val) => {
    console.log(val);
    setId_rol(val);
    setInicioSesion(val);
  }

  return (
    <>
             <Route path='/reserva' element={<Reserva />}  ></Route>

    </>
  )
}

export default App;
