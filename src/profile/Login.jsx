import React, {useState, useContext} from 'react';
import './Login.css';
import axios from 'axios';
import {AuthContext} from '../auth/AuthContext';
import API_URL from '../config';

export default function Login() {
  const [
    email, setEmail,
  ] = useState('');
  const [
    password, setPassword,
  ] = useState('');
  const [
    msg, setMsg,
  ] = useState('');
  const [
    error, setError,
  ] = useState(false);
  const {
    token, setToken,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Ingresaste a form');
    axios.post(`${API_URL}/login`, {
      email,
      password,
    }).then((response) => {
      setError(false);
      setMsg('Logueado con exito');
      navigate('/mainpage');

      // la logica se maneja en AuthProvider
      const {access_token} = response.data;
      console.log(access_token);
      // localStorage.setItem("token", access_token);
      setToken(access_token);
    }).catch((error) => {
      setMsg('Credenciales incorrectas');
      console.log(error);
    });
  };

  return (
    <>
      <input
        style={{textAlign: 'center'}}
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="ejemplo@correo.com"
      />
      <input
        style={{textAlign: 'center'}}
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="contraseña"
      />
      <button
        style={{margin: '20px', height: '30px', width: '65px'}}
        onClick={handleSubmit}
        type="submit"
      >
        Ingresar
      </button>
      <div className="phrase">
        {msg}
      </div>
      <button
        style={{margin: '20px', height: '30px', width: '65px'}}
        type="submit"
      >Entrar
      </button>
    </>
  );
}
