import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid align-content-between py-5">
            <div className="row">
                <div className="col-4">
                    <h5>AUTOTRUX</h5>
                    <div>
                        <img className="img-fluid w-75" src="img/AUTOTRUX_LOGO.png" alt="Logo Autotrux" />
                        <p>Gracias por visitar nuestro sitio web.</p>
                    </div>
                </div>
                <div className="col-4">
                    <h5>MAPA DE SITIO</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Inicio</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Nosotros</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Vehículos</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Clientes</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Testimonios</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contáctanos</a></li>
                    </ul>
                </div>
                <div className="col-4">
                    <h5>CONTÁCTANOS</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Dirección</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Teléfono</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Whatsapp</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Facebook</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Instagram</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Correo</a></li>
                    </ul>
                </div>
            </div>
            <div className="d-flex justify-content-between py-4 my-4 border-top">
                <p>Todos los derechos reservados. © 2021 <a href="#">AUTOTRUX</a></p>
                <p>Diseñado por : <a href="#">SCRUM TEAM 4</a></p>
            </div>
        </div>

    )
}

export default Footer;