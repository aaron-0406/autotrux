/* eslint-disable react-hooks/exhaustive-deps */
import { FunctionComponent, useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import { useUsuario } from "../auth/UsuarioProvider";

//services
import * as reservaServices from "../services/ReservaServices";

//components
import ReservaItem from "../components/views/Perfil/ReservaItem";

//interfaces
import { Reserva } from "../interfaces/Reserva";

interface PerfilProps {}

const Perfil: FunctionComponent<PerfilProps> = () => {
  const { usuario } = useUsuario();

  //Cargar datos
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [loadReservas, setLoadReservas] = useState<boolean>(false);

  const [cantidad, setCantidad] = useState<number>(0);
  const [cantidadPaginas, setCantidadPaginas] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const getReservas = async () => {
    const res: any = await reservaServices.getAllUser(page, usuario.id_usuario);
    if (res.data.error) return setReservas([]);
    setReservas(res.data.autos);
    setLoadReservas(true);
  };

  const getCantidad = async () => {
    const res: any = await reservaServices.getCountUser(usuario.id_usuario);
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
    setReservas([]);
    setLoadReservas(false);
  };

  useEffect(() => {
    getReservas();
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
    <>
      <div className="container my-3">
        <div className="my-4 pb-2">
          <h3
            style={{
              borderBottom: "1px solid #111",
              paddingBottom: "15px",
              color: "#515151",
            }}
          >
            Bienvenida {usuario.nombres}
          </h3>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>
              <span className="fw-bold">Nombres:</span> {usuario.nombres}
            </p>
            <p>
              <span className="fw-bold">Apellidos:</span> {usuario.apellidos}
            </p>
            <p>
              <span className="fw-bold">DNI:</span> {usuario.dni}
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <span className="fw-bold">E - mail:</span> {usuario.email}
            </p>
            <p>
              <span className="fw-bold">Teléfono:</span> {usuario.telefono}
            </p>
            <p className="fw-bold">
              Cliente:{" "}
              <span style={{ color: "#34c219" }}>{usuario.estado_usuario}</span>
            </p>
          </div>
        </div>

        <div className="row my-4">
          <p className="fw-bold mt-3">RESERVAS REALIZADAS</p>
          <table className="table table-bordered table-hover table-striped">
            <caption>Cantidad de reservas: {cantidad}</caption>
            <thead>
              <tr>
                <th className="border-0" style={{ width: 10 }}>
                  #
                </th>
                <th className="border-0">Vehiculo</th>
                <th className="border-0">Fecha Inicio</th>
                <th className="border-0">Fecha Fin</th>
                <th className="border-0">Estado Reserva</th>
                <th className="border-0">Costo</th>
                <th className="border-0" style={{ width: 40 }}></th>
              </tr>
            </thead>
            <tbody>
              {!loadReservas ? (
                <>
                  <tr className="m-3">
                    <td>Cargando datos...</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </>
              ) : (
                <>
                  {reservas.length === 0 ? (
                    <>
                      <tr className="m-3">
                        <td> No hay reservas registradas aún</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </>
                  ) : (
                    <>
                      {reservas.map((reserva, i) => {
                        return (
                          <ReservaItem
                            key={i}
                            i={i + 1}
                            getReservas={getReservas}
                            reserva={reserva}
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
                      <span aria-hidden="true">&laquo; Página Anterior</span>
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
                      <span aria-hidden="true">Página Siguiente &raquo;</span>
                    </button>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Perfil;
