import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from '../auth/AuthContext';
import './protected.css';
import API_URL from '../config';

function Check() {
  // ejemplo capsula: Hacen post a localhost/scope-example/protecteduser
  const {token} = useContext(AuthContext);
  const [text, setText] = useState('Hola');

  const config = {
    method: 'get',
    url: `${API_URL}/usuarios` || '',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleCheckUser = () => {
    !(localStorage.getItem('token'))
        ? console.log('no hay') : console.log('hay');
    axios(config).then((response) => {
      console.log('Enviaste token bueno');
      setText('Enviaste token bueno');
    }).catch((error) => {
      setText('Enviaste token malo');
      console.log(error);
    });
  };

  return (
    <div className="logo-and-login">
      <h1>Vista Protegida: Quien es usted?</h1>
      <h1>{text}</h1>
      <button onClick={handleCheckUser}>
        Check
      </button>
    </div>
  );
  // hay que añadirlo a las rutas como con Login
  // asi como con Check se puede hacer AdminCheck-
  // 401 es error de token 403 es error de permiso
  // tambien se puede hacer un compon Logout. Ultimos 2-3 min capsu
}

export default Check;
