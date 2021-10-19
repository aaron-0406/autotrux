import React from 'react';
import { Link } from 'react-router-dom';
// Iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSignInAlt
} from "@fortawesome/free-solid-svg-icons";

import logo from "../img/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar w-100 navbar-expand-lg navbar-light bg-light p-0 shadow">
            <div className="container-fluid">
                <div className="h-100 mx-3 me-5">
                    <img className="img-fluid" style={{ width: "100px" }} src={logo} alt="logo autotrux" />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">INICIO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/nosotros">NOSOTROS</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                VEHÍCULOS
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/autos">AUTOS</Link></li>
                                <li><Link className="dropdown-item" to="/camionetas">CAMIONETAS</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/clientes">CLIENTES</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/contactanos">CONTÁCTANOS</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <input className="form-control me-sm-2" type="text" placeholder="Buscar" style={{ border: "solid 1px #000" }} />
                        <button className="btn btn-info my-2 my-sm-0" type="submit">Buscar</button>
                    </div>
                </div>
            </div>
        </nav>


    )
}

export default Navbar;