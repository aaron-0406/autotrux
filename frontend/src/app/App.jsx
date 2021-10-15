import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Autos from "../pages/Autos";
import Camionetas from "../pages/Camionetas";
import Clientes from "../pages/Clientes";
import Contactanos from "../pages/Contactanos";
import Login from "../pages/Login";

import NotFound from "../pages/NotFound";

import LayoutUsuario from "../partials/LayoutUsuario";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <LayoutUsuario exact path="/" component={Home} />
                <LayoutUsuario exact path="/nosotros" component={Nosotros} />
                <LayoutUsuario exact path="/autos" component={Autos} />
                <LayoutUsuario exact path="/camionetas" component={Camionetas} />
                <LayoutUsuario exact path="/clientes" component={Clientes} />
                <LayoutUsuario exact path="/contactanos" component={Contactanos} />
                <Route exact path="/login" component={Login} />

                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

const AuthProviderContext = () => {
    return (
        <App />
    );
};
export default AuthProviderContext;