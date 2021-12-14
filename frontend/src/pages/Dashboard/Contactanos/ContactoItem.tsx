import { FunctionComponent } from "react";

// Toast
import { toast } from "react-toastify";

import { ContactoModel } from "../../../interfaces/Contactanos";

//services
import * as contactoServices from "../../../services/ContactoServices";

interface ContactoItemProps {
  i: number;
  contacto: ContactoModel;
  getContactanos: () => void;
  setContactoModal: (auto: ContactoModel) => void;
}

const ContactoItem: FunctionComponent<ContactoItemProps> = (props) => {
  const eliminarContacto = async (id?: number | undefined) => {
    const res: any = await contactoServices.eliminarContacto(id + "");
    if (res.data.success) {
      props.getContactanos();
      return toast.success(res.data.success);
    }
    if (res.data.error) return toast.error(res.data.error);
  };

  return (
    <>
      <tr>
        <td>{props.i}</td>
        <td>{props.contacto.nombre}</td>
        <td>{props.contacto.email}</td>
        <td>{props.contacto.telefono}</td>
        <td>
          <button
            data-bs-toggle="modal"
            data-bs-target="#verContacto"
            onClick={() => {
              props.setContactoModal(props.contacto);
            }}
            className="btn btn-primary"
          >
            <i className="nav-icon fas fa-eye" />
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              eliminarContacto(props.contacto.id_contactanos);
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

export default ContactoItem;
