import { Reserva } from './Componentes/Reserva'
import { Login } from './Componentes/Login/Login';

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
      {inicioSesion && <Menu auth={id_rol} />}

      <Route >  
     
{inicioSesion == false && <Route path='/' element={<Login dataSesion={onInicioSesion} />}  ></Route>}
{inicioSesion && id_rol == 1 && <Route path='/' element={<Inicio />}   ></Route>}
{inicioSesion && id_rol == 2 && <Route path='/' element={<Catalogo />}   ></Route>}
{inicioSesion && id_rol == 1 && <Route path='/reserva' element={<Reserva />}   ></Route>}

{inicioSesion && <Route path='*' element={<Default />}  ></Route>}
{inicioSesion == false && <Route path='*' element={<Login />}  ></Route>}


      </Route>

    </>
  );
}

export default App
