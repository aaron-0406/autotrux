import React from 'react';

const FooterCopyright = () => {
    return (
        <div className="container-fluid align-content-between bg-primary border-top">
            <div className="d-flex justify-content-between align-items-center py-4 px-5">
                <p className="m-0 text-muted">Todos los derechos reservados. © 2021 <a style={{ color: "#fff" }} href="#">AUTOTRUX</a></p>
                <p className="m-0 text-muted">Diseñado por : SCRUM TEAM 4</p>
            </div>
        </div>
    )
}

export default FooterCopyright;