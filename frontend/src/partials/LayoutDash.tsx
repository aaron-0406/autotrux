import React from "react";
import { Route } from "react-router-dom";

// Compoentes
import DashboardAside from "./DashboardAside";
import DashNavbar from "./DashNavbar";

// Interfaces
interface PrivateRouteProps {
    component: any;
    exact: boolean;
    path: string;
}
const DashboardLayout: React.FC = ({ children, ...rest }) => {
    return (
        <>
            <DashNavbar />
            <DashboardAside />
            {children}
        </>
    );
};
const LayoutDash = (props: PrivateRouteProps) => {
    const { component: Component, exact, path, ...rest } = props;
    return (
        <Route
            {...rest}
            render={(matchProps) => (
                <DashboardLayout>
                    <Component {...matchProps} />
                </DashboardLayout>
            )}
        />
    );
};

export default LayoutDash;
