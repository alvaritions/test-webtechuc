import {useState, useEffect} from 'react';
import {AuthContext} from './AuthContext';

function AuthProvider({children}) {
  const [token, setToken] = useState(localStorage.getItem('token' || ''));
  const [scope, setScope] = useState(localStorage.getItem('scope' || ''));

  // cada vez que se haga un cambio en el token
  useEffect(() => {
    localStorage.setItem('token', token);
    localStorage.setItem('scope', scope);
  }, [token]);

  function logout() {
    setToken('');
    setScope('');
  }

  return (
    <AuthContext.Provider value={{
      token, setToken, scope, setScope, logout,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
