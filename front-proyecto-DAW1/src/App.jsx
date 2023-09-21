import { BrowserRouter, Routes, Route } from "react-router-dom"

import Menu from "./components/menu/Menu"
import "./App.css"
import Dashboard from './components/dashboard/Dashboard';



const App = () => {
  return (
    <>
      <Menu>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      </Menu>

      
    </>

  )
}

export default App