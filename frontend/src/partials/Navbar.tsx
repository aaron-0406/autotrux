import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import { API } from "../config/config";

// Iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";

import logo from "../img/logo.png";

import { Usuario } from "../interfaces/Usuario";
import { useUsuario } from "../auth/UsuarioProvider";
import auth from "../auth/auth";

const initialState: Usuario = {
  id_usuario: 0,
  dni: "",
  nombres: "",
  apellidos: "",
  telefono: "",
  estado_usuario: "ACTIVO",
  rol: "",
  email: "",
};

const Navbar = () => {
  const { usuario, setUsuario } = useUsuario();
  const history = useHistory();

  //Desconectar
  const logout = async () => {
    const res = await Axios.get<any>(`${API}/logout`, {
      withCredentials: true,
    });
    if (res.data.success) {
      setUsuario(initialState);
      auth.setRango("");
      auth.logOut();
      return history.push("/"); //<- Te regresa a la pagina principal
    }
  };

  return (
    <nav className="navbar w-100 navbar-expand-lg navbar-light bg-light p-0 shadow">
      <div className="container-fluid">
        <div className="h-100 mx-3 me-5">
          <img
            className="img-fluid"
            style={{ width: "100px" }}
            src={logo}
            alt="logo autotrux"
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                INICIO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/nosotros"
              >
                NOSOTROS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/autos">
                AUTOS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/clientes"
              >
                CLIENTES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/contactanos"
              >
                CONTÁCTANOS
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            {usuario.rol === "CLIENTE" ? (
              <>
                <Link
                  className="btn btn-info my-2 my-sm-0 active dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink_perfil"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon
                    className="mx-2"
                    icon={faUser}
                    color="#fff"
                    size="lg"
                  />
                  {usuario.nombres}
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink_perfil"
                  style={{ left: "inherit" }}
                >
                  <li>
                    <Link className="dropdown-item" to="/perfil">
                      Perfil
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/" onClick={logout}>
                      Cerrar Sesión
                    </Link>
                  </li>
                </ul>
              </>
            ) : usuario.rol === "ADMINISTRADOR" ? (
              <Link className="btn btn-info my-2 my-sm-0" to="/dashboard">
                <FontAwesomeIcon
                  className="mx-2"
                  icon={faUser}
                  color="#fff"
                  size="lg"
                />
                {usuario.nombres}
              </Link>
            ) : (
              <Link className="btn btn-info my-2 my-sm-0" to="/login">
                <FontAwesomeIcon
                  className="mx-2"
                  icon={faSignInAlt}
                  color="#fff"
                  size="lg"
                />
                Iniciar Sesión
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
