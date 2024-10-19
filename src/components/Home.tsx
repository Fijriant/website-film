import React from "react";
import MainPage from "./Main";

const Home: React.FC = () => {
    return (
        <div className="hero">
            <div className="ratio ratio-16x9 bg-dark text-white">
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container mt-5">
                        <h5 className="card-title display-3 fw-bolder mb-0">Raja Movie</h5>
                        <p className="card-text lead fs-2">
                            Cari film kesukaanmu yaa!
                        </p>
                    </div>
                </div>    
            </div>
            <MainPage />
        </div>
    );
};

export default Home;
