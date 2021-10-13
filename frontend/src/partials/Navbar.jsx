import React from 'react';

import logo from "../img/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar w-100 navbar-expand-lg navbar-light bg-light p-0">
            <div className="container-fluid">
                <div className="h-100 mx-3 me-5">
                    <img className="img-fluid" style={{width:"100px"}} src={logo} alt="logo autotrux" />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">INICIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">NOSOTROS</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                VEHÍCULOS
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">AUTOS</a></li>
                                <li><a className="dropdown-item" href="#">CAMIONETAS</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">CLIENTES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">CONTÁCTANOS</a>
                        </li>
                    </ul>
                    <div>
                        <button type="button" className="btn btn-primary mx-2">INICIAR SESIÓN</button>
                        <button type="button" className="btn btn-info">REGISTRATE</button>
                    </div>
                </div>
            </div>
        </nav>


    )
}

export default Navbar;