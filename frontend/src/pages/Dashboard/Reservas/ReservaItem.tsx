import { FunctionComponent } from "react";
import { Reserva } from "../../../interfaces/Reserva";

interface ReservaItemProps {
  i: number;
  reserva: Reserva;
  getReservas: () => void;
  setReservaModal: (auto: Reserva) => void;
}

const ReservaItem: FunctionComponent<ReservaItemProps> = (props) => {
  return (
    <>
      <tr>
        <td>{props.i}</td>
        <td>{props.reserva.usuario}</td>
        <td>{props.reserva.vehiculo_id_vehiculo}</td>
        <td>{props.reserva.fecha_inicio}</td>
        <td>{props.reserva.fecha_fin}</td>
        <td>{props.reserva.estado_reserva}</td>
        <td>{props.reserva.costo_reserva}</td>
        <td>
          <button
            data-bs-toggle="modal"
            data-bs-target="#verReserva"
            onClick={() => {
              props.setReservaModal(props.reserva);
            }}
            className="btn btn-primary"
          >
            <i className="nav-icon fas fa-eye" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ReservaItem;
