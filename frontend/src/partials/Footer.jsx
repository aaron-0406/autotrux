import React from 'react';

import logo_oscuro from "../img/logo_fondo_oscuro.png";

const Footer = () => {
    return (
        <div className="container-fluid align-content-between p-5 bg-black">
            <div className="row text-center">
                <div className="col-4">
                    <div>
                        <img className="img-fluid" style={{ width: "150px" }} src={logo_oscuro} alt="Logo Autotrux" />
                        <p className="text-muted">Gracias por visitar nuestro sitio web. visitar nuestro sitio web. visitar nuestro sitio web. visitar nuestro sitio web.</p>
                    </div>
                </div>
                <div className="col-4">
                    <h5 className="mb-4" style={{ color: "#fff" }}>MAPA DE SITIO</h5>
                    <ul className="nav flex-column">
                        <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Inicio</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Nosotros</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Vehículos</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Clientes</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Testimonios</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Contáctanos</a></li>
                    </ul>
                </div>
                <div className="col-4">
                    <h5 className="mb-4" style={{ color: "#fff" }}>CONTÁCTANOS</h5>
                    <ul className="nav flex-column">
                        <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Dirección</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Teléfono</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Whatsapp</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Facebook</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Instagram</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Correo</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;