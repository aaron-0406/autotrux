import React from 'react';

const Camionetas = () => {
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

            <h1 className="text-center">CAMIONETAS</h1>
            <div className="container p-3">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                    <img src="https://cdn.discordapp.com/attachments/609494012545466390/899062551726415902/Renault_Koleos_Negro.png" className="card-img-top" alt="foto_camioneta" />
                    <div className="card-body">
                        <h3 className="card-title text-center">"modelo_camioneta" - "marca_camioneta"</h3>
                        <h4 className="text-center">"costo_camioneta"</h4>
                        <h5 className="text-center">"estado_camioneta"</h5>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Reservar
                            </button>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Color: "color_camioneta"</li>
                        <li className="list-group-item">Ano: "ano_camioneta"</li>
                        <li className="list-group-item">Transmision: "transmision_camioneta"</li>
                        <li className="list-group-item">Combustible: "combustible_camioneta"</li>
                        <li className="list-group-item">Motor: "motor_camioneta"</li>
                        <li className="list-group-item">Traccion: "traccion_camioneta"</li>
                        <li className="list-group-item">Potencia: "potencia_camioneta"</li>
                        <li className="list-group-item">Torque: "torque_camioneta"</li>
                        <li className="list-group-item">Rendimiento: "rendimiento_camioneta"</li>
                        <li className="list-group-item">Asientos: "asientos_camioneta"</li>
                    </ul>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src="https://cdn.discordapp.com/attachments/609494012545466390/899062551726415902/Renault_Koleos_Negro.png" className="card-img-top" alt="foto_camioneta" />
                    <div className="card-body">
                        <h3 className="card-title text-center">"modelo_camioneta" - "marca_camioneta"</h3>
                        <h4 className="text-center">"costo_camioneta"</h4>
                        <h5 className="text-center">"estado_camioneta"</h5>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Reservar
                            </button>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Color: "color_camioneta"</li>
                        <li className="list-group-item">Ano: "ano_camioneta"</li>
                        <li className="list-group-item">Transmision: "transmision_camioneta"</li>
                        <li className="list-group-item">Combustible: "combustible_camioneta"</li>
                        <li className="list-group-item">Motor: "motor_camioneta"</li>
                        <li className="list-group-item">Traccion: "traccion_camioneta"</li>
                        <li className="list-group-item">Potencia: "potencia_camioneta"</li>
                        <li className="list-group-item">Torque: "torque_camioneta"</li>
                        <li className="list-group-item">Rendimiento: "rendimiento_camioneta"</li>
                        <li className="list-group-item">Asientos: "asientos_camioneta"</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Camionetas;