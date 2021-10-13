import React from "react";
import { Route } from "react-router-dom";

// Componentes
import Footer from "./Footer";
import FooterCopyright from "./FooterCopyright";
import HeadInformation from "./HeadInformation";
import Navbar from "./Navbar";


const UsuarioLayout = ({ children, ...rest }) => {
    return (
        <>
            <HeadInformation />
            <Navbar />
            {children}
            <Footer />
            <FooterCopyright />
        </>
    );
};
const LayoutUsuario = (props) => {
    const { component: Component, exact, path, ...rest } = props;
    return (
        <Route
            {...rest}
            render={(matchProps) => (
                <UsuarioLayout>
                    <Component {...matchProps} />
                </UsuarioLayout>
            )}
        />
    );
};

export default LayoutUsuario;
