import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

let _errorTimeout;

export const Login = () => {
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const handleInput = ({ target: { name, value } }) => {
    if (error) setError(false);
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ ...form });
    } catch (err) {
      // errore
      setError(true);
      setForm({ email: "", password: "" });
    }
  }

  useEffect(() => {
    clearTimeout(_errorTimeout);
    if (error) {
      _errorTimeout = setTimeout(() => {
        setError(false);
      }, 10000);
    }
  }, [error]);

  useEffect(() => {
    if (user) {
      navigate('/profile', { replace: true });
    }
  }, []);

  return (
    <>
      <h1>Login</h1>
      {
        error && <p style={{ color: 'red' }}>L'utente non esiste...</p>
      }
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={form.email} onInput={handleInput} />
        <input type="password" name="password" value={form.password} onInput={handleInput} />
        <button type="submit">Login</button>
      </form>
    </>
  )
}
