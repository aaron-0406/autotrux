import { FunctionComponent, useState, useRef, useEffect } from "react";

//interfaces
import { ContactoModel } from "../../../interfaces/Contactanos";

interface ModalContactoProps {
  setContactoModal: (auto: ContactoModel) => void;
  contacto: ContactoModel;
  render: () => void;
}

const initStateContacto: ContactoModel = {
  id_contactanos: 0,
  nombre: "",
  email: "",
  telefono: "",
  mensaje: "",
};

const ModalContacto: FunctionComponent<ModalContactoProps> = (props) => {
  // States
  const [contacto, setContacto] = useState(initStateContacto);

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
    setContacto({ ...contacto, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setContacto(props.contacto);
    return () => setContacto(initStateContacto);
  }, [props.contacto]);

  const cleanInputs = () => {
    props.setContactoModal(initStateContacto);
  };

  return (
    <div
      className="modal fade"
      id="verContacto"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="verContacto"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <form onSubmit={handleSubmit}>
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="createExpediente">
                MENSAJE DE CONTACTO
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
                    htmlFor="input_id_contactanos"
                    className="form-label fw-normal"
                  >
                    ID CONTACTO
                  </label>
                  <input
                    required
                    type="text"
                    disabled
                    className="form-control"
                    id="input_id_contactanos"
                    name="id_contactanos"
                    onChange={handleChange}
                    value={contacto.id_contactanos}
                  />
                  <div className="invalid-feedback">
                    Porfavor, completar los campos.
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 mt-3">
                  <label
                    htmlFor="input_nombre"
                    className="form-label fw-normal"
                  >
                    Nombres
                  </label>
                  <input
                    required
                    type="text"
                    disabled
                    className="form-control"
                    id="input_nombre"
                    name="nombre"
                    onChange={handleChange}
                    value={contacto.nombre}
                  />
                  <div className="invalid-feedback">
                    Porfavor, completar los campos.
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 mt-3">
                  <label htmlFor="input_email" className="form-label fw-normal">
                    E-mail
                  </label>
                  <input
                    required
                    type="email"
                    disabled
                    className="form-control"
                    id="input_email"
                    name="email"
                    onChange={handleChange}
                    value={contacto.email}
                  />
                  <div className="invalid-feedback">
                    Porfavor, completar los campos.
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 mt-3">
                  <label htmlFor="id_telefono" className="form-label fw-normal">
                    Teléfono
                  </label>
                  <input
                    required
                    type="text"
                    disabled
                    className="form-control"
                    id="id_telefono"
                    name="telefono"
                    onChange={handleChange}
                    value={contacto.telefono}
                  />
                  <div className="invalid-feedback">
                    Porfavor, completar los campos.
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <label
                    htmlFor="input_mensaje"
                    className="form-label fw-normal"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="input_mensaje"
                    required
                    name="mensaje"
                    value={contacto.mensaje}
                    rows={4}
                    className="form-control"
                    placeholder="Mensaje"
                    onChange={handleChange}
                    disabled
                  ></textarea>

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
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalContacto;
