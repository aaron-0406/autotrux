import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div style={{border: "solid"}} className="mx-4 container px-4">
            <h1>Login</h1>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Usuario</span>
                <input type="text" className="form-control" placeholder="usuario" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Contraseña</span>
                <input type="text" className="form-control" placeholder="contraseña" aria-label="contra" aria-describedby="addon-wrapping" />
            </div>

            <Link to="/login" type="button" className="btn btn-primary mx-2">INICIAR SESIÓN</Link>

            <Link to="/login" type="button" className="btn btn-primary mx-2">REGISTRARSE</Link>

        </div>


    );
}

export default Login;