import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";

import LayoutUsuario from "../partials/LayoutUsuario";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <LayoutUsuario exact path="/" component={Home} />
                <LayoutUsuario exact path="/contact" component={Contact} />
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