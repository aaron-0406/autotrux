import React from 'react';

// Services
import * as autoServices from "../../../services/AutoServices";

// Toast
import { toast } from "react-toastify";

// Interfaces
import Auto from "../../../interfaces/Vehiculo";

interface Props {
    i: number;
    auto: Auto;
    getAutos: () => void;
    setAutoModal: (auto: Auto) => void;
}

const AutoItem: React.FC<Props> = (props) => {
    const eliminarAuto = async (id?: number) => {
        const res: any = await autoServices.eliminarAuto(id + "");
        if (res.data.success) {
            props.getAutos();
            return toast.success(res.data.success);
        }
        if (res.data.error) return toast.error(res.data.error);
    };

    return (
        <tr>
            <td>{props.i}</td>
            <td>{props.auto.placa_vehiculo}</td>
            <td>{props.auto.modelo_vehiculo}</td>
            <td>{props.auto.costo_vehiculo}</td>
            <td>{props.auto.asientos_vehiculo}</td>
            <td>{props.auto.estado_vehiculo === "HABILITADO" ? <>HABILITADO</> : <> INHABILITADO </>}</td>
            <td>
                <button
                    data-bs-toggle="modal"
                    data-bs-target="#createExpediente"
                    onClick={() => {
                        props.setAutoModal(props.auto);
                    }}
                    className="btn btn-primary"
                >
                    <i className="nav-icon fas fa-eye" />
                </button>
            </td>
            <td>
                {props.auto.estado_vehiculo === "HABILITADO" ? (
                    <>
                        <button
                            onClick={() => {
                                eliminarAuto(props.auto.id_vehiculo);
                            }}
                            className="btn btn-danger"
                        >
                            X
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => {
                                eliminarAuto(props.auto.id_vehiculo);
                            }}
                            className="btn btn-success"
                        >
                            X
                        </button>
                    </>
                )}
            </td>
        </tr>
    );
}

export default AutoItem;