import { FunctionComponent } from "react";

// Toast
import { toast } from "react-toastify";

//interfaces
import { Reserva } from "../../../interfaces/Reserva";

//services
import * as reservaServices from "../../../services/ReservaServices";

interface ReservaItemProps {
  i: number;
  reserva: Reserva;
  getReservas: () => void;
}

const ReservaItem: FunctionComponent<ReservaItemProps> = (props) => {
  const eliminarReserva = async (id?: number) => {
    const res: any = await reservaServices.eliminarReserva(id + "");
    if (res.data.success) {
      props.getReservas();
      return toast.success(res.data.success);
    }
    if (res.data.error) return toast.error(res.data.error);
  };

  return (
    <>
      <tr>
        <td>{props.i}</td>
        <td>{props.reserva.vehiculo_id_vehiculo}</td>
        <td>{props.reserva.fecha_inicio}</td>
        <td>{props.reserva.fecha_fin}</td>
        <td>{props.reserva.estado_reserva}</td>
        <td>{props.reserva.costo_reserva}</td>
        <td>
          <button
            onClick={() => {
              eliminarReserva(props.reserva.id_reservas);
            }}
            className="btn btn-danger"
          >
            X
          </button>
        </td>
      </tr>
    </>
  );
};

export default ReservaItem;
