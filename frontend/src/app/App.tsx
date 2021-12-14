import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Variables globales
import { UsuarioProvider } from "../auth/UsuarioProvider";

import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Autos from "../pages/Autos";
import Clientes from "../pages/Clientes";
import Contactanos from "../pages/Contactanos";
import Login from "../pages/Login";
import Registrate from "../pages/Registrate";
import Perfil from "../pages/Perfil";

import NotFound from "../pages/NotFound";

import LayoutUsuario from "../partials/LayoutUsuario";
import LayoutDash from "../partials/LayoutDash";

// Dashboard Pages
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardAutos from "../pages/Dashboard/Autos/Autos";
import DashboardContactanos from "../pages/Dashboard/Contactanos/Contactanos";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutUsuario exact path="/" component={Home} />
        <LayoutUsuario exact path="/nosotros" component={Nosotros} />
        <LayoutUsuario exact path="/autos" component={Autos} />
        <LayoutUsuario exact path="/clientes" component={Clientes} />
        <LayoutUsuario exact path="/contactanos" component={Contactanos} />
        <LayoutUsuario exact path="/perfil" component={Perfil} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registrate" component={Registrate} />

        <LayoutDash exact path="/dashboard" component={Dashboard} />
        <LayoutDash exact path="/dashboard/autos" component={DashboardAutos} />
        <LayoutDash
          exact
          path="/dashboard/contactanos"
          component={DashboardContactanos}
        />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

const AuthProviderContext: React.FC = () => {
  return (
    <UsuarioProvider>
      <App />
    </UsuarioProvider>
  );
};
export default AuthProviderContext;
