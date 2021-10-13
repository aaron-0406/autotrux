import React from 'react';

const Navbar = () => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="img/AUTOTRUX_LOGO.png" alt width={100} height={100} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Nosotros</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Vehículos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Autos</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Camionetas</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Clientes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Testimonios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Contáctanos</a>
                            </li>
                        </ul>
                        <div>
                            <button type="button" className="btn btn-primary">Iniciar sesión</button>
                            <button type="button" className="btn btn-info">Registrarse</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;