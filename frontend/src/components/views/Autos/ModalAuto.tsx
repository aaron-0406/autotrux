import { FunctionComponent } from "react";
import Vehiculo from "../../../interfaces/Vehiculo";

interface ModalAutoProps {
  auto: Vehiculo | undefined;
}

const ModalAuto: FunctionComponent<ModalAutoProps> = (
  props: ModalAutoProps
) => {
  return (
    <>
      {/* Modal */}
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
                <strong>Transmisión:</strong> {props.auto?.transmision_vehiculo}
              </p>
              <p className="my-0">
                <strong>Combustible:</strong> {props.auto?.combustible_vehiculo}
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
                <strong>Rendimiento:</strong> {props.auto?.rendimiento_vehiculo}
              </p>
              <p className="my-0">
                <strong>Asientos:</strong> {props.auto?.asientos_vehiculo}
              </p>
              <p className="my-0">
                <strong>Costo:</strong> {props.auto?.costo_vehiculo}
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-primary">
                Reservar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAuto;
