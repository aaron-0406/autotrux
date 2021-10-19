import { useState } from 'react';

// Componentes
import Buscador from "../../../components/Buscador";
import ListaAutos from "./ListaAutos";

// Interfaces
import Auto from "../../../interfaces/Vehiculo";

const initStateAuto: Auto = {
    id_vehiculo: 0,
    tipo_vehiculo: "",
    placa_vehiculo: "",
    modelo_vehiculo: "",
    marca_vehiculo: "",
    color_vehiculo: "",
    anio_vehiculo: "",
    transmision_vehiculo: "",
    combustible_vehiculo: "",
    motor_vehiculo: "",
    traccion_vehiculo: "",
    potencia_vehiculo: "",
    torque_vehiculo: "",
    rendimiento_vehiculo: "",
    asientos_vehiculo: "",
    costo_vehiculo: "",
    estado_vehiculo: "HABILITADO",
    foto_vehiculo: ""
};

const Autos: React.FC = () => {
    const [autoModal, setAutoModal] = useState<Auto>(initStateAuto);
    const [trigguer, setTrigguer] = useState<number>(0);

    const [filtro, setFiltro] = useState<string>("");
    const buscar = (text: string) => setFiltro(text);

    return (
        <div className="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div className="content-wrapper">
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="card mt-4">
                            <div className="card-header">
                                <h3 className="card-title">
                                    Gestión de Autos
                                </h3>
                                <div className="card-body">
                                    <div className="w-100 d-flex justify-content-end">
                                        <Buscador tooltip="Buscar por placa de auto." placeholder="Buscar Auto" funcion={buscar} />
                                        <button
                                            type="button"
                                            className="btn btn-secondary ms-2"
                                            data-bs-toggle="modal"
                                            data-bs-target="#createExpediente"
                                            onClick={() => {
                                                setAutoModal(initStateAuto);
                                            }}
                                        >+
                                        </button>
                                    </div>

                                    <div className="table-responsive mt-4">
                                        <ListaAutos setTrigguer={setTrigguer} trigguer={trigguer} autoModal={autoModal} setAutoModal={setAutoModal} filtro={filtro} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Control Sidebar */}
            <aside className="control-sidebar control-sidebar-dark">{/* Control sidebar content goes here */}</aside>
            {/* /.control-sidebar */}
        </div>
    );
}

export default Autos;