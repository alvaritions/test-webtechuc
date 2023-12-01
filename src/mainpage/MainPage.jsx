import './MainPage.css';
import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import uchatLogo from '../assets/uchat_logo.png';
import Post from './Post';
import {AuthContext} from '../auth/AuthContext';
import Users from '../users/Users';

function MainPage() {
  return (
    <div key="users" className="column">
      <h1>Usuarios registrados en UChat</h1>
      <Users />
    </div>
  );
}

export default MainPage;
