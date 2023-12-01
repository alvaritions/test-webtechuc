import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react';
import {AuthContext} from '../auth/AuthContext';
import API_URL from '../config';

export default function Cursos() {
  const [cursos, setCursos] = useState([]);
  const [nrc, setNrc] = useState('');
  const [nombre, setNombre] = useState('');
  const [sigla, setSigla] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState(false);

  const {token} = useContext(AuthContext);

  const config_cursos = {
    method: 'get',
    url: `${API_URL}/cursos` || '',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const deleteCurso = (id) => () => {
    const config_delete = {
      method: 'delete',
      url: `${API_URL}/cursos/${id}` || '',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config_delete)
      .then((response) => {
        console.log(response.data);
        setCursos(cursos.filter((curso) => curso.id !== id));
        alert(response.data.message);
      })
      .catch((error) => {
        alert(error.data);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .post(`${API_URL}/cursos`, {
        nrc,
        nombre,
        sigla,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setError(false);
        setCursos([...cursos, response.data]);
        setMsg('Curso creado con éxito');
      })
      .catch((error) => {
        setError(true);
        setMsg(error.message);
      });
  };

  useEffect(() => {
    axios(config_cursos)
      .then((response) => {
        console.log('Enviaste token bueno');
        setCursos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="card mt-5">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h1>Cursos</h1>
        <div>
          <button className="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#nuevoCurso">
            Nuevo curso
          </button>
        </div>
      </div>
      <div className="collapse" id="nuevoCurso">
        <div className="card-header border-light">
          <form className="row row-cols-lg-auto align-items-center my-3" onSubmit={handleSubmit}>
            <div className="col-12">
              <div className="input-group">
                <label htmlFor="nrc" className="input-group-text">NRC</label>
                <input
                  className="form-control text-center"
                  type="text"
                  id="nrc"
                  value={nrc}
                  onChange={(event) => setNrc(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-12">
              <div className="input-group">
                <label htmlFor="sigla" className="input-group-text">Sigla</label>
                <input
                  className="form-control text-center"
                  type="text"
                  id="sigla"
                  value={sigla}
                  onChange={(event) => setSigla(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-12">
              <div className="input-group">
                <label htmlFor="nombre" className="input-group-text">Nombre</label>
                <input
                  className="form-control text-center"
                  type="text"
                  id="nombre"
                  value={nombre}
                  onChange={(event) => setNombre(event.target.value)}
                  required
                />
              </div>
            </div>
            {(error
            && <div className="alert alert-danger mt-3">{msg}</div>)
            || (msg
              && <div className="alert alert-success mt-3">{msg}</div>)}
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-hover table-bordered text-center align-middle">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NRC</th>
              <th scope="col">Sigla</th>
              <th scope="col">Nombre</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cursos.map((curso) => (
              <tr key={curso.id}>
                <td>{curso.id}</td>
                <td>{curso.nrc}</td>
                <td>{curso.sigla}</td>
                <td>{curso.nombre}</td>
                <td>
                  <button type="button" className="btn btn-primary mx-2 btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                    </svg>
                  </button>
                  <button onClick={deleteCurso(curso.id)} type="button" className="btn btn-danger mx-2 btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
