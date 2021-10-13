import React from 'react';

const Footer = () => {
    return (
        <div class="container-fluid align-content-between py-5">
            <div class="row">
                <div class="col-4">
                    <h5>AUTOTRUX</h5>
                    <div>
                        <img class="img-fluid w-75" src="img/AUTOTRUX_LOGO.png" alt="Logo Autotrux">
                        <p>Gracias por visitar nuestro sitio web.</p>
                    </div>
                </div>
                <div class="col-4">
                    <h5>MAPA DE SITIO</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Inicio</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Nosotros</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Vehículos</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Clientes</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Testimonios</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Contáctanos</a></li>
                    </ul>
                </div>
                <div class="col-4">
                    <h5>CONTÁCTANOS</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Dirección</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Teléfono</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Whatsapp</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Facebook</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Instagram</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Correo</a></li>
                    </ul>
                </div>
            </div>
            <div class="d-flex justify-content-between py-4 my-4 border-top">
                <p>Todos los derechos reservados. &copy; 2021 <a href="#">AUTOTRUX</a></p>
                <p>Diseñado por : <a href="#">SCRUM TEAM 4</a></p>
            </div>
        </div>
    )
}

export default Footer;