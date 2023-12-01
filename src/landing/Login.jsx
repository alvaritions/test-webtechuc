import React, {useState, useContext} from 'react';
import axios from 'axios';
import uchatLogo from '../assets/uchat_logo.png';
import {AuthContext} from '../auth/AuthContext';

export default function Login({openRegister}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState(false);
  const {setToken, setScope} = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        email,
        password,
      })
      .then((response) => {
        setError(false);
        const {access_token, scope} = response.data;
        setToken(access_token);
        setScope(scope);
        setMsg('Logueado con exito');
        navigate('/mainpage');
      })
      .catch((error) => {
        setError(true);
        setMsg(error.message);
      });
  };

  return (
    <div className="col-12 col-md-5">
      <img src={uchatLogo} className="img-fluid" alt="UChat Logo" width="400px" />
      <form onSubmit={handleSubmit}>
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
          Ingresar
        </button>
      </form>
      {(error
        && <div className="alert alert-danger mt-3">{msg}</div>)
        || (msg
          && <div className="alert alert-success mt-3">{msg}</div>)}
      <div className="mb-3 mt-5">
        ¿Aún no estás registrado?
        <button type="button" className="btn btn-outline-light btn-sm ms-3" onClick={openRegister}>
          Registrarse
        </button>
      </div>
    </div>
  );
}
