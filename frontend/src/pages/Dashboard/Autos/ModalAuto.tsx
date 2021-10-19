import React, { useRef, useState, useEffect } from 'react';

// Services
import * as autoServices from "../../../services/AutoServices";

// Toast
import { toast } from "react-toastify";

// Interfaces
import Auto from "../../../interfaces/Vehiculo";
import { useUsuario } from "../../../auth/UsuarioProvider";

interface Props {
    setTrigguer: (trigguer: number) => void;
    trigguer: number;
    setAutoModal: (auto: Auto) => void;
    auto: Auto;
    render: () => void;
}

const initStateAuto: Auto = {
    id_vehiculo: 0,
    tipo_vehiculo: "AUTO",
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

const ModalAuto: React.FC<Props> = (props) => {
    const { usuario } = useUsuario();

    // States
    const [auto, setAuto] = useState(initStateAuto);

    // References
    const refProgresss = useRef<HTMLDivElement | null>();
    const refInputFile = useRef<HTMLInputElement | null>();
    const refButton = useRef<HTMLButtonElement | null>();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Crear
        if (auto.id_vehiculo === 0) {
            auto.tipo_vehiculo = "AUTO"
            delete auto.id_vehiculo;
            const res: any = await autoServices.createAuto(auto, refProgresss.current);
            if (res.data.error) return toast.error(res.data.error);

            if (refProgresss.current) {
                refProgresss.current.innerHTML = "0%";
                refProgresss.current.style.width = "0%";
            }
            setAuto(initStateAuto);
            props.render();
            props.setTrigguer(props.trigguer + 1);
            if (refButton.current) refButton.current.click();
            if (refInputFile.current) refInputFile.current.value = "";
            return toast.success(res.data.success);
        }

        // Actualizar
        const res: any = await autoServices.editarAuto(auto.id_vehiculo + "", auto, refProgresss.current);
        if (res.data.error) return toast.error(res.data.error);

        if (refProgresss.current) {
            refProgresss.current.innerHTML = "0%";
            refProgresss.current.style.width = "0%";
        }
        setAuto(initStateAuto);
        props.render();
        props.setTrigguer(props.trigguer + 1);
        if (refButton.current) refButton.current.click();
        if (refInputFile.current) refInputFile.current.value = "";
        toast.success(res.data.success);
    }

    const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) setAuto({ ...auto, [e.target.name]: e.target.files });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setAuto({ ...auto, [event.target.name]: event.target.value });
    };

    useEffect(() => {
        setAuto(props.auto);
        return () => setAuto(initStateAuto);
    }, [props.auto]);

    const cleanInputs = () => {
        props.setAutoModal(initStateAuto);
    };

    return (
        <div
            className="modal fade"
            id="createExpediente"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="createExpediente"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg modal-dialog-scrollable">
                <form onSubmit={handleSubmit}>
                    <div className="modal-content">
                        {auto.id_vehiculo === 0 ? (
                            <>
                                <div className="modal-header bg-dark">
                                    <h5 className="modal-title" id="createExpediente">
                                        Agregar Auto
                                    </h5>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" onClick={cleanInputs} aria-label="Close" />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="modal-header bg-warning">
                                    <h5 className="modal-title" id="createExpediente">
                                        Modificar Auto
                                    </h5>
                                    <button type="button" onClick={cleanInputs} className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                            </>
                        )}

                        <div className="modal-body">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-6 mt-3">
                                    <label htmlFor="input_placa_auto" className="form-label fw-normal">
                                        Placa
                                    </label>
                                    {auto.id_vehiculo === 0 ? (
                                        <>
                                            <input required type="text" className="form-control" id="input_placa_auto" name="placa_vehiculo" onChange={handleChange} value={auto.placa_vehiculo} />
                                        </>
                                    ) : (
                                        <>
                                            <input required type="text" disabled className="form-control" id="input_placa_auto" name="placa_vehiculo" onChange={handleChange} value={auto.placa_vehiculo} />
                                        </>
                                    )}
                                    <div className="invalid-feedback">
                                        Porfavor, completar los campos.
                                    </div>

                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mt-3">
                                    <label htmlFor="input_modelo_auto" className="form-label fw-normal">
                                        Modelo
                                    </label>
                                    <input required type="text" className="form-control" id="input_modelo_auto" name="modelo_vehiculo" onChange={handleChange} value={auto.modelo_vehiculo} />
                                    <div className="invalid-feedback">
                                        Porfavor, completar los campos.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mt-3">
                                    <label htmlFor="input_marca_auto" className="form-label fw-normal">
                                        Marca
                                    </label>
                                    <input required type="text" className="form-control" id="input_marca_auto" name="marca_vehiculo" onChange={handleChange} value={auto.marca_vehiculo} />
                                    <div className="invalid-feedback">
                                        Porfavor, completar los campos.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mt-3">
                                    <label htmlFor="input_color_vehiculo" className="form-label fw-normal">
                                        Color
                                    </label>
                                    <input required type="text" className="form-control" id="input_color_vehiculo" name="color_vehiculo" onChange={handleChange} value={auto.color_vehiculo} />
                                    <div className="invalid-feedback">
                                        Porfavor, completar los campos.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mt-3">
                                    <label htmlFor="input_anio_vehiculo" className="form-label fw-normal">
                                        Año
                                    </label>
                                    <input required type="text" className="form-control" id="input_anio_vehiculo" name="anio_vehiculo" onChange={handleChange} value={auto.anio_vehiculo} />
                                    <div className="invalid-feedback">
                                        Porfavor, completar los campos.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mt-3">
                                    <label htmlFor="input_transmision_vehiculo" className="form-label fw-normal">
                                        Transmisión
                                    </label>
                                    <input required type="text" className="form-control" id="input_transmision_vehiculo" name="transmision_vehiculo" onChange={handleChange} value={auto.transmision_vehiculo} />
                                    <div className="invalid-feedback">
                                        Porfavor, completar los campos.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mt-3">
                                    <label htmlFor="input_combustible_auto" className="form-label fw-normal">
                                        Combustible
                                    </label>
                                    <input required type="text" className="form-control" id="input_combustible_auto" name="combustible_vehiculo" onChange={handleChange} value={auto.combustible_vehiculo} />
                                    <div className="invalid-feedback">
                                        Porfavor, completar los campos.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mt-3">
                                    <label htmlFor="input_motor_auto" className="form-label fw-normal">
                                        Motor
                                    </label>
                                    <input required type="text" className="form-control" id="input_motor_auto" name="motor_vehiculo" onChange={handleChange} value={auto.motor_vehiculo} />
                                    <div className="invalid-feedback">
                                        Porfavor, completar los campos.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mt-3">
                                    <label htmlFor="input_traccion_auto" className="form-label fw-normal">
                                        Tracción
                                    </label>
                                    <input required type="text" className="form-control" id="input_traccion_auto" name="traccion_vehiculo" onChange={handleChange} value={auto.traccion_vehiculo} />
                                    <div className="invalid-feedback">
                                        Porfavor, completar los campos.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mt-3">
                                    <label htmlFor="input_potencia_auto" className="form-label fw-normal">
                                        Potencia
                                    </label>
                                    <input required type="text" className="form-control" id="input_potencia_auto" name="potencia_vehiculo" onChange={handleChange} value={auto.potencia_vehiculo} />
                                    <div className="invalid-feedback">
                                        Porfavor, completar los campos.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mt-3">
                                    <label htmlFor="input_torque" className="form-label fw-normal">
                                        Torque
                                    </label>
                                    <input required type="text" className="form-control" id="input_torque" name="torque_vehiculo" onChange={handleChange} value={auto.torque_vehiculo} />
                                    <div className="invalid-feedback">
                                        Porfavor, completar los campos.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mt-3">
                                    <label htmlFor="input_rendimiento" className="form-label fw-normal">
                                        Rendimiento
                                    </label>
                                    <input required type="text" className="form-control" id="input_rendimiento" name="rendimiento_vehiculo" onChange={handleChange} value={auto.rendimiento_vehiculo} />
                                    <div className="invalid-feedback">
                                        Porfavor, completar los campos.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mt-3">
                                    <label htmlFor="input_asientos" className="form-label fw-normal">
                                        Asientos
                                    </label>
                                    <input required type="text" className="form-control" id="input_asientos" name="asientos_vehiculo" onChange={handleChange} value={auto.asientos_vehiculo} />
                                    <div className="invalid-feedback">
                                        Porfavor, completar los campos.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mt-3">
                                    <label htmlFor="input_costo" className="form-label fw-normal">
                                        Costo
                                    </label>
                                    <input required type="text" className="form-control" id="input_costo" name="costo_vehiculo" onChange={handleChange} value={auto.costo_vehiculo} />
                                    <div className="invalid-feedback">
                                        Porfavor, completar los campos.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mt-3">
                                    <label htmlFor="input_estado" className="form-label fw-normal">
                                        Estado
                                    </label>
                                    <input required type="text" disabled className="form-control" id="input_estado" name="estado_vehiculo" onChange={handleChange} value={auto.estado_vehiculo} />
                                    <div className="invalid-feedback">
                                        Porfavor, completar los campos.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mt-3">
                                    <label htmlFor="input_foto" className="form-label fw-normal">
                                        Foto
                                    </label>
                                    <input required type="text" className="form-control" id="input_foto" name="foto_vehiculo" onChange={handleChange} value={auto.foto_vehiculo} />
                                    <div className="invalid-feedback">
                                        Porfavor, completar los campos.
                                    </div>
                                </div>

                                <div className="col-12 col-md-12 col-lg-12 mt-3">
                                    <div className="progress">
                                        <div className="progress-bar" ref={(node) => (refProgresss.current = node)} role="progressbar" style={{ width: "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                                            0%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button ref={(node) => (refButton.current = node)} type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={cleanInputs}>
                                Cerrar
                            </button>
                            {auto.id_vehiculo === 0 ? (
                                <>
                                    <button type="submit" className="btn btn-primary">
                                        Agregar Auto
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button type="submit" className="btn btn-warning">
                                        Modificar Auto
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalAuto;