
import Menu from "./components/menu/Menu"
import "./App.css"
import Dashboard from './components/dashboard/Dashboard';
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
  const App = () => {
    return (
      <>
        <Menu>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path='/reserva' element={<Reserva />}  ></Route>
            </Routes>
          </BrowserRouter>
        </Menu>



      </>

    )
  }
}
  export default App

