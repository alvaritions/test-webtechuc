import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import {useContext} from 'react';
import Landing from '../landing/Landing';
import Navbar from './Navbar';
import MainPage from '../mainpage/MainPage';
import Instructions from '../instructions/Instructions';
import Users from '../users/Users';
import Cursos from '../cursos/Cursos';
import {AuthContext} from '../auth/AuthContext';

export default function Routing() {
  const {token, scope} = useContext(AuthContext);

  return (
    <BrowserRouter>
      {token && <Navbar />}
      <Routes>
        <Route path="/*" element={scope === 'admin' ? <Users /> : (scope === 'user' ? <MainPage /> : <Landing />)} />
        <Route path="/mainpage" element={scope === 'user' ? <MainPage /> : <Navigate to="/" />} />
        <Route path="/instructions" element={scope === 'user' ? <Instructions /> : <Navigate to="/" />} />
        <Route path="/users" element={scope === 'admin' ? <Users /> : <Navigate to="/" />} />
        <Route path="/cursos" element={scope === 'admin' ? <Cursos /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
