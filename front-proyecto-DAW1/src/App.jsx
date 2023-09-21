<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Menu from "./components/menu/Menu"
import "./App.css"
import Dashboard from './components/dashboard/Dashboard';
=======
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
>>>>>>> 4f546b9107b3084c78de6f80f9b7189160008ac1



const App = () => {
  return (
    <>
<<<<<<< HEAD
      <Menu>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      </Menu>

      
=======
             <Route path='/reserva' element={<Reserva />}  ></Route>

>>>>>>> 4f546b9107b3084c78de6f80f9b7189160008ac1
    </>

  )
}

<<<<<<< HEAD
export default App
=======
export default App;
>>>>>>> 4f546b9107b3084c78de6f80f9b7189160008ac1
