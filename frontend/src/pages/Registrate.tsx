import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useUsuario } from "../auth/UsuarioProvider";
import { API } from "../config/config";
import axios from "axios";
import auth from "../auth/auth";
// Toast
import { toast, ToastContainer } from "react-toastify";

// Imagenes
import imgLogo from "../img/logo.png";
import imgLogo2 from "../img/logo.png";

interface RegistrateProps {}

// Interfaces
interface Usuario {
  dni: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  estado_usuario: string;
  rol: string;
  email: string;
  password: string;
}

const Registrate: FunctionComponent<RegistrateProps> = () => {
  //Initial State
  const history = useHistory();
  const { setUsuario } = useUsuario();
  const [usuarioR, setUsuarioR] = useState<Usuario>({
    dni: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    estado_usuario: "ACTIVO",
    rol: "CLIENTE",
    email: "",
    password: "",
  });

  const enviarDatos = async (user: any) => {
    return await axios.post(`${API}/signup`, user);
  };

  // Change Event
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUsuarioR({ ...usuarioR, [e.target.name]: e.target.value });
  };

  //Submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const datos: any = await enviarDatos(usuarioR);
      if (datos.data.success) {
        setUsuario(datos.data.user);
        auth.setRango(datos.data.user.rol);
        auth.sigIn();
        history.push("/");
      }
      if (datos.data.error) return toast.error(datos.data.error);
      return toast.error("Oops ocurrio un error");
    } catch (e) {
      return toast.error("Oops ocurrio un error");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="login container-fluid vh-100 d-flex justify-content-center align-items-center">
        <div className="row w-75">
          <div className="text-center login-first col-12 col-md-12 col-lg-6 h-100 my-auto py-3">
            <Link to="/">
              <img
                alt=""
                className="login-img d-none d-md-inline py-4 w-100 m-0"
                src={imgLogo}
              />
              <img
                alt=""
                className="login-img d-inline d-md-none py-2 w-50 m-0"
                src={imgLogo2}
              />
            </Link>
          </div>
          <div className="login-second col-12 col-md-12 col-lg-6 d-flex justify-content-center justify-content-lg-start align-items-center">
            <form className="py-3" onSubmit={handleSubmit}>
              <h6 className="py-2 fs-4">Registra tus datos</h6>
              <div className="mb-3">
                <input
                  value={usuarioR.nombres}
                  type="text"
                  className="form-control"
                  name="nombres"
                  placeholder="Nombres"
                  autoFocus
                  onChange={handleInputChange}
                  required
                  pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ]{3, 50}"
                  minLength={3}
                  maxLength={50}
                />
              </div>
              <div className="mb-3">
                <input
                  value={usuarioR.apellidos}
                  type="text"
                  className="form-control"
                  name="apellidos"
                  placeholder="Apellidos"
                  onChange={handleInputChange}
                  required
                  pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ]{3, 50}"
                  minLength={3}
                  maxLength={50}
                />
              </div>
              <div className="mb-3">
                <input
                  value={usuarioR.dni}
                  type="text"
                  className="form-control"
                  name="dni"
                  placeholder="DNI"
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{8}"
                  maxLength={8}
                />
              </div>
              <div className="mb-3">
                <input
                  value={usuarioR.telefono}
                  type="text"
                  className="form-control"
                  name="telefono"
                  placeholder="Teléfono"
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{5, 9}"
                  maxLength={9}
                />
              </div>
              <div className="mb-3">
                <input
                  value={usuarioR.email}
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="E-mail"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  value={usuarioR.password}
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Contraseña"
                  onChange={handleInputChange}
                  required
                  minLength={5}
                />
              </div>
              <button className="btn btn-info w-100 fw-bold">
                Registrar datos
              </button>
              <p className="pt-4">¿Ya tienes una cuenta en AUTOTRUX?</p>
              <Link
                className="w-100 btn fw-bold"
                style={{ border: "1px solid #111", fontSize: "14px" }}
                to="/login"
              >
                Inicia Sesión
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registrate;
