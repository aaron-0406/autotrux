/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

//services
import * as contactoServices from "../../../services/ContactoServices";

//components
import ContactoItem from "./ContactoItem";
import ModalContacto from "./ModalContacto";

//interfaces
import { ContactoModel } from "../../../interfaces/Contactanos";

const initStateContacto: ContactoModel = {
  id_contactanos: 0,
  nombre: "",
  email: "",
  telefono: "",
  mensaje: "",
};

const Contactanos = () => {
  //Cargar datos
  const [contactoModal, setContactoModal] =
    useState<ContactoModel>(initStateContacto);
  const [contactos, setContactos] = useState<ContactoModel[]>([]);
  const [loadContactos, setLoadContactos] = useState<boolean>(false);

  const [cantidad, setCantidad] = useState<number>(0);
  const [cantidadPaginas, setCantidadPaginas] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const getContactanos = async () => {
    const res: any = await contactoServices.getAll(page);
    if (res.data.error) return setContactos([]);
    setContactos(res.data.autos);
    setLoadContactos(true);
  };

  const getCantidad = async () => {
    const res: any = await contactoServices.getCount();
    setCantidad(res.data);
    setCantidadPaginas(Math.ceil(res.data / 10));
  };

  const paginaSiguiente = () => {
    if (page === cantidadPaginas) return;
    setPage(page + 1);
  };

  const paginaAnterior = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const limpieza = () => {
    setContactos([]);
    setLoadContactos(false);
  };

  useEffect(() => {
    getContactanos();
    return () => limpieza();
  }, [page]);

  useEffect(() => {
    setPage(1);
    setCantidadPaginas(0);
    getCantidad();
    return () => {
      setCantidad(0);
      setCantidadPaginas(0);
      setPage(1);
    };
  }, []);

  return (
    <div className="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
      <div className="content-wrapper">
        {/* Main content */}
        <section className="content">
          <div className="container-fluid px-4">
            <>
              <div className="row my-4">
                <p className="fw-bold mt-3">MENSAJES DE CONTACTO</p>
                <table className="table table-bordered table-hover table-striped">
                  <caption>Cantidad de mensajes: {cantidad}</caption>
                  <thead>
                    <tr>
                      <th className="border-0" style={{ width: 10 }}>
                        #
                      </th>
                      <th className="border-0">Nombre</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Teléfono</th>
                      <th className="border-0" style={{ width: 40 }}></th>
                      <th className="border-0" style={{ width: 40 }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {!loadContactos ? (
                      <>
                        <tr className="m-3">
                          <td>Cargando datos...</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </>
                    ) : (
                      <>
                        {contactos.length === 0 ? (
                          <>
                            <tr className="m-3">
                              <td> No hay mensajes registrados aún</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                          </>
                        ) : (
                          <>
                            {contactos.map((contacto, i) => {
                              return (
                                <ContactoItem
                                  key={i}
                                  i={i + 1}
                                  setContactoModal={setContactoModal}
                                  getContactanos={getContactanos}
                                  contacto={contacto}
                                />
                              );
                            })}
                          </>
                        )}
                      </>
                    )}
                  </tbody>
                </table>
                <div className="d-flex justify-content-between">
                  {cantidadPaginas === 0 ? (
                    <></>
                  ) : (
                    <>
                      {page === 1 ? (
                        <></>
                      ) : (
                        <>
                          <button
                            onClick={() => {
                              paginaAnterior();
                            }}
                            className="btn btn__blue"
                          >
                            <span aria-hidden="true">
                              &laquo; Página Anterior
                            </span>
                          </button>
                        </>
                      )}
                      {page === cantidadPaginas ? (
                        <></>
                      ) : (
                        <>
                          <button
                            onClick={() => {
                              paginaSiguiente();
                            }}
                            className="btn btn__blue ms-auto"
                          >
                            <span aria-hidden="true">
                              Página Siguiente &raquo;
                            </span>
                          </button>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
              <ModalContacto
                render={getContactanos}
                contacto={contactoModal}
                setContactoModal={setContactoModal}
              />
            </>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contactanos;
