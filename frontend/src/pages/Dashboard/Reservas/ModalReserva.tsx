import { FunctionComponent, useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";

//interfaces
import { Reserva } from "../../../interfaces/Reserva";

// Services
import * as autoServices from "../../../services/AutoServices";
import * as reservaServices from "../../../services/ReservaServices";

interface ModalReservaProps {
  setReservaModal: (auto: Reserva) => void;
  reserva: Reserva;
  render: () => void;
}

const initStateReserva: Reserva = {
  id_reservas: 0,
  usuario_id_usuario: 0,
  vehiculo_id_vehiculo: 0,
  fecha_inicio: new Date(),
  fecha_fin: new Date(),
  estado_reserva: "",
  costo_reserva: 0,
};

const ModalReserva: FunctionComponent<ModalReservaProps> = (props) => {
  // States
  const [reserva, setReserva] = useState(initStateReserva);

  // References
  const refButton = useRef<HTMLButtonElement | null>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setReserva({ ...reserva, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setReserva(props.reserva);
    return () => setReserva(initStateReserva);
  }, [props.reserva]);

  const cleanInputs = () => {
    props.setReservaModal(initStateReserva);
  };

  const aceptarReserva = async () => {
    const vehi: any = await autoServices.getByCodigoAuto(
      String(reserva.vehiculo_id_vehiculo)
    );
    if (vehi.data.autos.estado_vehiculo === "HABILITADO") {
      const res: any = await reservaServices.arReserva(
        String(reserva.id_reservas),
        "ACTIVA"
      );
      const res1: any = await autoServices.eliminarAuto(
        String(reserva.vehiculo_id_vehiculo)
      );
      if (res.data.success && res1.data.success) {
        props.render();
        return toast.success(res.data.success);
      }
      if (res.data.error) return toast.error(res.data.error);
    }
    if (vehi.data.autos.estado_vehiculo === "INHABILITADO") {
      return toast.error("El auto a reservar se encuentra ocupado");
    }
  };

  const rechazarReserva = async () => {
    const res: any = await reservaServices.arReserva(
      String(reserva.id_reservas),
      "RECHAZADA"
    );
    if (res.data.success) {
      props.render();
      return toast.success(res.data.success);
    }
    if (res.data.error) return toast.error(res.data.error);
  };

  const finalizarReserva = async () => {
    const res: any = await reservaServices.arReserva(
      String(reserva.id_reservas),
      "FINALIZADA"
    );
    const res1: any = await autoServices.eliminarAuto(
      String(reserva.vehiculo_id_vehiculo)
    );
    if (res.data.success && res1.data.success) {
      props.render();
      return toast.success(res.data.success);
    }
    if (res.data.error) return toast.error(res.data.error);
  };

  const retrasarReserva = async () => {
    const res: any = await reservaServices.arReserva(
      String(reserva.id_reservas),
      "RETRASADA"
    );
    if (res.data.success) {
      props.render();
      return toast.success(res.data.success);
    }
    if (res.data.error) return toast.error(res.data.error);
  };

  return (
    <div
      className="modal fade"
      id="verReserva"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="verReserva"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <form onSubmit={handleSubmit}>
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="createExpediente">
                RESERVA
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                onClick={cleanInputs}
                aria-label="Close"
              />
            </div>

            <div className="modal-body">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6 mt-3">
                  <label
                    htmlFor="input_id_reservas"
                    className="form-label fw-normal"
                  >
                    ID RESERVA
                  </label>
                  <input
                    required
                    type="text"
                    disabled
                    className="form-control"
                    id="input_id_reservas"
                    name="id_reservas"
                    onChange={handleChange}
                    value={reserva.id_reservas}
                  />
                  <div className="invalid-feedback">
                    Porfavor, completar los campos.
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 mt-3">
                  <label
                    htmlFor="input_estado_reserva"
                    className="form-label fw-normal"
                  >
                    Estado de reserva
                  </label>
                  <input
                    required
                    type="text"
                    disabled
                    className="form-control"
                    id="input_estado_reserva"
                    name="estado_reserva"
                    onChange={handleChange}
                    value={reserva.estado_reserva}
                  />
                  <div className="invalid-feedback">
                    Porfavor, completar los campos.
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 mt-3">
                  <label
                    htmlFor="input_usuario"
                    className="form-label fw-normal"
                  >
                    Usuario
                  </label>
                  <input
                    required
                    type="text"
                    disabled
                    className="form-control"
                    id="input_usuario"
                    name="usuario_id_usuario"
                    onChange={handleChange}
                    value={reserva.usuario}
                  />
                  <div className="invalid-feedback">
                    Porfavor, completar los campos.
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 mt-3">
                  <label htmlFor="id_vehiculo" className="form-label fw-normal">
                    Vehiculo
                  </label>
                  <input
                    required
                    type="text"
                    disabled
                    className="form-control"
                    id="id_vehiculo"
                    name="vehiculo_id_vehiculo"
                    onChange={handleChange}
                    value={reserva.vehiculo_id_vehiculo}
                  />
                  <div className="invalid-feedback">
                    Porfavor, completar los campos.
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 mt-3">
                  <label
                    htmlFor="input_fecha_inicio"
                    className="form-label fw-normal"
                  >
                    Fecha Inicio
                  </label>
                  <input
                    required
                    type="date"
                    disabled
                    className="form-control"
                    id="input_fecha_inicio"
                    name="fecha_inicio"
                    onChange={handleChange}
                    value={String(reserva.fecha_inicio)}
                  />
                  <div className="invalid-feedback">
                    Porfavor, completar los campos.
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 mt-3">
                  <label
                    htmlFor="input_fecha_fin"
                    className="form-label fw-normal"
                  >
                    Fecha Fin
                  </label>
                  <input
                    required
                    type="date"
                    disabled
                    className="form-control"
                    id="input_fecha_fin"
                    name="fecha_fin"
                    onChange={handleChange}
                    value={String(reserva.fecha_fin)}
                  />
                  <div className="invalid-feedback">
                    Porfavor, completar los campos.
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 mt-3">
                  <label
                    htmlFor="id_costo_reserva"
                    className="form-label fw-normal"
                  >
                    Costo
                  </label>
                  <input
                    required
                    type="text"
                    disabled
                    className="form-control"
                    id="id_costo_reserva"
                    name="costo_reserva"
                    onChange={handleChange}
                    value={"$ " + reserva.costo_reserva}
                  />
                  <div className="invalid-feedback">
                    Porfavor, completar los campos.
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                ref={(node) => (refButton.current = node)}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={cleanInputs}
              >
                Cerrar
              </button>
              {reserva.estado_reserva === "ACTIVA" ? (
                <>
                  <button
                    onClick={() => {
                      retrasarReserva();
                    }}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Retrasar Reserva
                  </button>
                  <button
                    onClick={() => {
                      finalizarReserva();
                    }}
                    type="submit"
                    className="btn btn-warning"
                  >
                    Finalizar Reserva
                  </button>
                </>
              ) : (
                ""
              )}
              {reserva.estado_reserva === "PENDIENTE" ? (
                <>
                  <button
                    onClick={() => {
                      aceptarReserva();
                    }}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Aceptar Reserva
                  </button>
                  <button
                    onClick={() => {
                      rechazarReserva();
                    }}
                    type="submit"
                    className="btn btn-warning"
                  >
                    Rechazar Reserva
                  </button>
                </>
              ) : (
                ""
              )}
              {reserva.estado_reserva === "RECHAZADA" ? "" : ""}
              {reserva.estado_reserva === "FINALIZADA" ? "" : ""}
              {reserva.estado_reserva === "RETRASADA" ? (
                <>
                  <button
                    onClick={() => {
                      finalizarReserva();
                    }}
                    type="submit"
                    className="btn btn-warning"
                  >
                    Finalizar Reserva
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalReserva;
