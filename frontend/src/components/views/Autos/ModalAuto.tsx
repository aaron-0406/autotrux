import { FunctionComponent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import { API } from "../../../config/config";

//Interfaces
import Vehiculo from "../../../interfaces/Vehiculo";
import { Reserva } from "../../../interfaces/Reserva";

import { useUsuario } from "../../../auth/UsuarioProvider";

interface ModalAutoProps {
  auto: Vehiculo;
}

const initialState: Reserva = {
  usuario_id_usuario: 0,
  vehiculo_id_vehiculo: 0,
  fecha_inicio: new Date(),
  fecha_fin: new Date(),
  estado_reserva: "PENDIENTE",
  costo_reserva: 0,
};

const ModalAuto: FunctionComponent<ModalAutoProps> = (
  props: ModalAutoProps
) => {
  const { usuario } = useUsuario();

  const [reserva, setReserva] = useState<Reserva>(initialState);
  const buttonCerrar = useRef<HTMLButtonElement>(null);

  const handleReservar = () => {
    buttonCerrar.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReserva({ ...reserva, [e.target.name]: e.target.value });
  };

  const calcularDias = (): number => {
    let fecha1,
      fecha2: number = 0;
    fecha1 = new Date(reserva.fecha_inicio).getTime();
    fecha2 = new Date(reserva.fecha_fin).getTime();

    let diff = fecha2 - fecha1;
    let dias = diff / (1000 * 60 * 60 * 24);
    return dias;
  };

  const actualizarDatos = () => {
    const newReserva: Reserva = {
      usuario_id_usuario: Number(usuario.id_usuario),
      vehiculo_id_vehiculo: Number(props.auto.id_vehiculo),
      fecha_inicio: reserva.fecha_inicio,
      fecha_fin: reserva.fecha_fin,
      estado_reserva: "PENDIENTE",
      costo_reserva: calcularDias() * Number(props.auto.costo_vehiculo),
    };
    setReserva(newReserva);
    return newReserva;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newReserva = actualizarDatos();
    const res: any = await axios.post(`${API}/api/v0/reserva`, newReserva);
    if (res.data.success) {
      return toast.success("Solicitud de reserva enviada con exito!");
    }
    if (res.data.error) return toast.error(res.data.error);
  };

  return (
    <>
      <ToastContainer />
      {/* Modal */}
      <form onSubmit={handleSubmit}>
        <div
          className="modal fade"
          id="verAutoCliente"
          tabIndex={-1}
          aria-labelledby="verAutoClienteLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="verAutoCliente">
                  Auto: {props.auto?.placa_vehiculo}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <img
                  className="w-100 mb-3"
                  src={props.auto?.foto_vehiculo}
                  alt="imagen auto"
                />
                {usuario.rol === "" ? (
                  ""
                ) : (
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <p className="m-0 fw-bold">Fecha de Renta:</p>
                      <input
                        className="w-100 form-control-plaintext"
                        type="date"
                        name="fecha_inicio"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <p className="m-0 fw-bold">Fecha de Entrega:</p>
                      <input
                        className="w-100 form-control-plaintext"
                        type="date"
                        name="fecha_fin"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                )}
                <p className="my-0">
                  <strong>Modelo:</strong> {props.auto?.modelo_vehiculo}
                </p>
                <p className="my-0">
                  <strong>Marca:</strong> {props.auto?.marca_vehiculo}
                </p>
                <p className="my-0">
                  <strong>Color:</strong> {props.auto?.color_vehiculo}
                </p>
                <p className="my-0">
                  <strong>Año:</strong> {props.auto?.anio_vehiculo}
                </p>
                <p className="my-0">
                  <strong>Transmisión:</strong>{" "}
                  {props.auto?.transmision_vehiculo}
                </p>
                <p className="my-0">
                  <strong>Combustible:</strong>{" "}
                  {props.auto?.combustible_vehiculo}
                </p>
                <p className="my-0">
                  <strong>Motor:</strong> {props.auto?.motor_vehiculo}
                </p>
                <p className="my-0">
                  <strong>Tracción:</strong> {props.auto?.traccion_vehiculo}
                </p>
                <p className="my-0">
                  <strong>Potencia:</strong> {props.auto?.potencia_vehiculo}
                </p>
                <p className="my-0">
                  <strong>Torque:</strong> {props.auto?.torque_vehiculo}
                </p>
                <p className="my-0">
                  <strong>Rendimiento:</strong>{" "}
                  {props.auto?.rendimiento_vehiculo}
                </p>
                <p className="my-0">
                  <strong>Asientos:</strong> {props.auto?.asientos_vehiculo}
                </p>
                <p className="my-0">
                  <strong>Costo:</strong> ${props.auto?.costo_vehiculo}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  ref={buttonCerrar}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                {usuario.rol === "" ? (
                  <Link
                    to="/login"
                    className="btn btn-primary"
                    onClick={handleReservar}
                  >
                    Reservar
                  </Link>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    Reservar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ModalAuto;
