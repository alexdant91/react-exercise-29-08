import axios from 'axios';
import { createContext, useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const navigate = useNavigate();

  const login = async ({ email, password }) => {
    try {
      const { data } = await axios({
        url: "http://localhost:4000/login",
        method: "POST",
        data: {
          email,
          password
        }
      });
      setUser(data);
      navigate("/profile");
    } catch (err) {
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(() => ({ // memoized fx
    user,
    login,
    logout,
  }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

export const useAuth = () => {
  return useContext(AuthContext);
}

// cosnt { user, login, logout } = useAuth();

/**
 * history: [
 *  '/',
 *  '/login',
 *  '/profile',
 *  '/',
 * ]
 *
 * replace -> false => push()
 *
 * history.push(NEW_PATH);
 *
 * replace -> true => replace()
 *
 * history.replace(PREV_PATH, NEW_PATH);
 *
 */
