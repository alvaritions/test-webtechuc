import React, {useContext, useState} from 'react';
import {NavLink} from 'react-router-dom';
import uchatLogo from '../assets/uchat_logo.png';
import {AuthContext} from '../auth/AuthContext';

export default function Navbar() {
  const {logout, scope} = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={uchatLogo} alt="UChat Logo" width="100px" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{'--bs-scroll-height': '150px'}}>
            {scope === 'admin' && (
            <li className="nav-item">
              <NavLink className="nav-link" to="users">
                Administrar usuarios
              </NavLink>
            </li>
            )}
            {scope === 'admin' && (
            <li className="nav-item">
              <NavLink className="nav-link" to="cursos">
                Administrar cursos
              </NavLink>
            </li>
            )}
            {scope === 'user' && (
            <li className="nav-item">
              <NavLink className="nav-link" to="mainpage">
                Página Principal
              </NavLink>
            </li>
            )}
            {scope === 'user' && (
            <li className="nav-item">
              <NavLink className="nav-link" to="instructions">
                Página de Instrucciones
              </NavLink>
            </li>
            )}
          </ul>
          <NavLink className="btn btn-primary my-2" type="button" to="/" onClick={handleLogout}>
            Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
