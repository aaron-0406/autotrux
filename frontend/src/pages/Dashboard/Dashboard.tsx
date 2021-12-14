import React from "react";

import Reservas from "./Reservas/Reservas";

const Dashboard: React.FC = () => {
  return (
    <div className="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
      <div className="content-wrapper">
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <Reservas />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
