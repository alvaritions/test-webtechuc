import React, {useState, useContext} from 'react';
import axios from 'axios';
import entradaSJ from '../assets/entrada_sj.jpg';
import uchatLogo from '../assets/uchat_logo.png';
import {AuthContext} from '../auth/AuthContext';
import API_URL from '../config';

export default function Register({openLogin}) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState(false);
  const {token, setToken} = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(nombre);
    console.log(email);
    console.log(password);
    console.log('Ingresaste Register');
    axios.post(`${API_URL}/signup`, {
      nombre,
      email,
      password,
    }).then((response) => {
      setError(false);
      setMsg('Registrado con exito! Ahora puedes hacer Login');

      console.log(response);
    }).catch((error) => {
      setError(true);
      setMsg(error.response.data || error.message);
      console.log(error);
    });
  };
  return (
    <div className="col-12 col-md-5 my-3">
      <div className="card">
        <div className="card-header">
          <button type="button" className="btn btn-link text-dark" onClick={openLogin}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
            </svg>
          </button>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input
                className="form-control text-center"
                type="nombre"
                id="nombre"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                className="form-control text-center"
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                className="form-control text-center"
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Registrarme
            </button>
          </form>
          {(error
            && <div className="alert alert-danger my-3">{msg}</div>)
          || (msg && <div className="alert alert-success my-3">{msg}</div>)}
        </div>
      </div>
    </div>
  );
}
