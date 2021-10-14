import React from 'react';

const Home = () => {
    return (
        <div className="container-flex">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/slide1.png" className="d-block w-100" alt="Bienvenida" />
                    </div>
                    <div className="carousel-item">
                        <img src="img/slide2.png" className="d-block w-100" alt="Contáctanos" />
                    </div>
                    <div className="carousel-item">
                        <img src="img/slide3.png" className="d-block w-100" alt="Nosotros" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}

export default Home;