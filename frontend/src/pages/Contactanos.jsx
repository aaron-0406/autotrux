import React, { useState } from "react";
// Iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhoneAlt, faEnvelope, faClock
} from "@fortawesome/free-solid-svg-icons";

const Contactanos = () => {
    const initialState = {
        nombre_contacto: "",
        email_contacto: "",
        telefono_contacto: "",
        text: "",
        visto: 1,
    };

    // State
    const [contact, setContact] = useState(initialState);

    // Evento submit
    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    // Change Input
    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="shadow" style={{ background: "#F7F7F9" }}>
                <div className="row container mx-auto">
                    <div className="col-md-4 my-4">
                        <div className="row">
                            <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ borderRight: "1px solid #000" }}>
                                <FontAwesomeIcon
                                    icon={faPhoneAlt}
                                    color="#0BBAFF"
                                    size="3x"
                                />
                            </div>
                            <div className="col-md-8 d-flex flex-column">
                                <p className="fw-bold">TELÉFONO</p>
                                <p className="my-0">946 325 579<br />987 654 321</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-4">
                        <div className="row">
                            <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ borderRight: "1px solid #000" }}>
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    color="#0BBAFF"
                                    size="3x"
                                />
                            </div>
                            <div className="col-md-8 d-flex flex-column">
                                <p>E - MAIL</p>
                                <p className="my-0">info@autotrux.com<br />team@autotrux.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-4">
                        <div className="row">
                            <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ borderRight: "1px solid #000" }}>
                                <FontAwesomeIcon
                                    icon={faClock}
                                    color="#0BBAFF"
                                    size="3x"
                                />
                            </div>
                            <div className="col-md-8 d-flex flex-column">
                                <p>HORARIO</p>
                                <p className="my-0">08:00 AM - 01:00 PM<br />03:00 PM - 07:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row container-fluid px-0 mx-0">
                <div className="col-md-6 px-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.077478073887!2d-79.02776108567029!3d-8.093581583180075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3df4d29b3ac3%3A0xf9f59cc0aa58416b!2sAutoshop%20Trujillo!5e0!3m2!1ses!2spe!4v1634230480689!5m2!1ses!2spe" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
                </div>
                <div className="col-md-6 p-5">
                    <p className="fs-3 text-center mb-5 pb-4" style={{ borderBottom: "1px solid #000" }}>
                        ¡Contáctanos ahora!
                    </p>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={contact.nombre_contacto} className="form-control" name="nombre_contacto" placeholder="Nombre Completo" onChange={handleChange} autoFocus />

                        <br />
                        <input type="email" value={contact.email_contacto} className="form-control" name="email_contacto" placeholder="E - mail" onChange={handleChange} />

                        <br />
                        <input type="text" value={contact.telefono_contacto} className="form-control" name="telefono_contacto" placeholder="Teléfono" onChange={handleChange} />

                        <br />
                        <textarea name="text" value={contact.text} rows={4} className="form-control" placeholder="Mensaje" onChange={handleChange}></textarea>
                        <br />
                        <button className="btn btn-block w-100 btn-info">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contactanos;