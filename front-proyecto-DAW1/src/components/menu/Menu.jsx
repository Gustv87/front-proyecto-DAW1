import { useState } from 'react';
import './Menu.css'


const Menu = () => {

    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>

            {/* <!-- Menu --> */}
            <nav id="sidebar" className={collapsed ? 'active' : ''}>
                <div className="sidebar-header">
                    <h3>Nombre de la Aplicación</h3>
                </div>

                <ul className="list-unstyled components">
                    <p>Menú</p>
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Productos</a>
                    </li>
                    <li>
                        <a href="#">Servicios</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ul>

                <button className="btn btn-secondary toggle-btn" onClick={toggleSidebar}>
                    {collapsed ? 'Abrir' : 'Cerrar'} Menú
                </button>
            </nav>



        </>
    )
}

export default Menu