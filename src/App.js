import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

/**
 * <Routes>
 *  <Route path="/" element={<Home />} />
 *  <Route path="/login" element={<Login />} />
 *  <Route path="/profile" element={
 *    <ProtectedRoute>
 *      <Profile />
 *    <ProtectedRoute>
 *  } />
 * </Routes>
 */
