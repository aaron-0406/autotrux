import React from 'react';

const Autos = () => {
    return (
        <div className="container p-3">

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Reservar</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                    <center><iframe frameBorder={0} height={445} width={350} scrolling="yes" src="https://www.christopher-carrasco.ga" /><center>
                    </center></center></div>
                </div>
            </div>
            </div>

            <h1 className="text-center">AUTOS</h1>
            <div className="container p-3">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                        <div className="card">
                            <img src="https://cdn.discordapp.com/attachments/609494012545466390/899062022560415744/Toyota_Yaris_Blanco.png" className="card-img-top" alt="foto_auto" />
                                <div className="card-body">
                                    <h3 className="card-title text-center">"modelo_auto" - "marca_auto"</h3>
                                    <h4 className="text-center">"costo_auto"</h4>
                                    <h5 className="text-center">"estado_auto"</h5>
                                    <div className="text-center">
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Reservar
                                        </button>
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Color: "color_auto"</li>
                                    <li className="list-group-item">Ano: "ano_auto"</li>
                                    <li className="list-group-item">Transmision: "transmision_auto"</li>
                                    <li className="list-group-item">Combustible: "combustible_auto"</li>
                                    <li className="list-group-item">Motor: "motor_auto"</li>
                                    <li className="list-group-item">Traccion: "traccion_auto"</li>
                                    <li className="list-group-item">Potencia: "potencia_auto"</li>
                                    <li className="list-group-item">Torque: "torque_auto"</li>
                                    <li className="list-group-item">Rendimiento: "rendimiento_auto"</li>
                                    <li className="list-group-item">Asientos: "asientos_auto"</li>
                                </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://cdn.discordapp.com/attachments/609494012545466390/899062022560415744/Toyota_Yaris_Blanco.png" className="card-img-top" alt="foto_auto" />
                                <div className="card-body">
                                    <h3 className="card-title text-center">"modelo_auto" - "marca_auto"</h3>
                                    <h4 className="text-center">"costo_auto"</h4>
                                    <h5 className="text-center">"estado_auto"</h5>
                                    <div className="text-center">
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Reservar
                                        </button>
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Color: "color_auto"</li>
                                    <li className="list-group-item">Ano: "ano_auto"</li>
                                    <li className="list-group-item">Transmision: "transmision_auto"</li>
                                    <li className="list-group-item">Combustible: "combustible_auto"</li>
                                    <li className="list-group-item">Motor: "motor_auto"</li>
                                    <li className="list-group-item">Traccion: "traccion_auto"</li>
                                    <li className="list-group-item">Potencia: "potencia_auto"</li>
                                    <li className="list-group-item">Torque: "torque_auto"</li>
                                    <li className="list-group-item">Rendimiento: "rendimiento_auto"</li>
                                    <li className="list-group-item">Asientos: "asientos_auto"</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Autos;