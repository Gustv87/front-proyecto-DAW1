import './Menu.css'

const Menu = () => {

    return (
        <>

            {/* <!-- Menu --> */}

            <div className="d-flex">
                <div className="sidebar-container ">
                    <div className="logo">
                        <h4 className='text-light font-weight-bold'>Reservacion de Laboratorios</h4>
                    </div>
                    <div className="menu">
                        <a to="/reserva" className='d-block text-light p-3'><i className="bi bi-person me-2 lead"></i>Usuarios</a>
                        <a href="#" className='d-block text-light p-3'><i className="bi bi-book me-2 lead"></i>Reservaciones</a>
                        <a href="#" className='d-block text-light p-3'><i className="bi bi-buildings me-2 lead"></i>Laboratorios</a>
                        <a href="#" className='d-block text-light p-3'><i className="bi bi-calendar-event me-2 lead"></i>Horarios</a>
                    </div>
                </div>
                <div className='w-100'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Pricing</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown link
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>


        </>
    )
}

export default Menu