import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm fixed-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4" to="/">Raja Movie</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav justify-content-center mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" end>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movie">Movie</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                    </ul>
                    {/* Bagian kanan untuk Login atau Guest */}
                    <div className="ml-auto">
                        <NavLink className="btn btn-outline-primary me-2" to="/login">Login</NavLink>
                        <NavLink className="btn btn-outline-primary" to="/">Guest</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
