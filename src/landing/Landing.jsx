import React, {useState, useContext} from 'react';
import axios from 'axios';
import entradaSJ from '../assets/entrada_sj.jpg';
import Login from './Login';
import Register from './Register';

export default function Landing() {
  const [register, setRegister] = useState(false);

  return (
    <div className="row align-items-center justify-content-center text-center h-100">
      <div className="col-12 col-md-7">
        <div className="card text-bg-dark my-3">
          <img src={entradaSJ} className="card-img" alt="Entrada SJ" />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="card" style={{backgroundColor: 'rgba(0, 0, 0, 0.85)'}}>
              <h1 className="card-body">Una red social para saber todo de tus ramos en la UC</h1>
            </div>
          </div>
        </div>
      </div>
      {register
        ? <Register openLogin={() => setRegister(false)} />
        : <Login openRegister={() => setRegister(true)} />}
    </div>
  );
}
