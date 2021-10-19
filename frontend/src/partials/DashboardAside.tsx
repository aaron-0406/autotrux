import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUsuario } from "../auth/UsuarioProvider";

import logo from "../img/logo.png";


const DashboardAside: React.FC = () => {
    const { usuario, loadUser } = useUsuario();

    useEffect(() => {
        if (!loadUser) return;
    }, [loadUser]);

    return (
        <aside className="position-fixed main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <Link to="/" className="brand-link text-decoration-none">
                <img src={logo} alt="" className="brand-image img-circle elevation-3" style={{ opacity: ".8" }} />
                <span className="brand-text font-weight-light"> AUTOTRUX</span>
            </Link>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <i className="img-circle elevation-1 fas fa-user fs-3 me-2 mt-1" style={{ color: "#c2c7d0" }}></i>
                    </div>
                    <div className="info">
                        <p className="d-block mb-0" style={{ color: "#c2c7d0" }}>
                            {usuario.nombres}
                        </p>
                    </div>
                    <a className="btn btn-secondary ms-auto" data-bs-toggle="tooltip" data-bs-placement="top" title="Web Mail" rel="noreferrer" target="_blank" href="https://ip-72-167-43-179.ip.secureserver.net:2096/webmaillogout.cgi">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>

                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                        <li className="nav-header">INVENTARIO</li>
                        <li className="nav-item">
                            <Link to="/dashboard/autos" className="nav-link">
                                <p>Autos</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard/camionetas" className="nav-link">
                                <p>Camionetas</p>
                            </Link>
                        </li>

                        <li className="nav-header">SITIO WEB</li>
                        <li className="nav-item">
                            <Link to="/dashboard/contactanos" className="nav-link">
                                <i className="nav-icon far fa-envelope" />
                                <p>
                                    Mensajes de Contáctanos
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard/reclamaciones" className="nav-link">
                                <i className="nav-icon fas fa-book-open" />
                                <p>
                                    Libro de Reclamaciones
                                </p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
        </aside>
    );
}

export default DashboardAside;