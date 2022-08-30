import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'

export const NavBar = () => {
  const { user } = useAuth();

  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      {!user && <Link to="/login">Login</Link>}
      {user && <Link to="/profile">Profile</Link>}
    </nav>
  )
}
