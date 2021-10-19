import React from "react";
import { Route } from "react-router-dom";

// Componentes
import Footer from "./Footer";
import FooterCopyright from "./FooterCopyright";
import HeadInformation from "./HeadInformation";
import Navbar from "./Navbar";

interface PrivateRouteProps {
    component: any;
    exact: boolean;
    path: string;
}

const UsuarioLayout: React.FC = ({ children, ...rest }) => {
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
const LayoutUsuario: React.FC<PrivateRouteProps> = (props) => {
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
