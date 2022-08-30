import { useAuth } from '../hooks/useAuth'

export const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <h1>Profile: {user.email}</h1>
      <button onClick={logout}>Logout</button>
    </>
  )
}
