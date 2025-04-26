import { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const { isLoggedIn } = useContext(AuthContext)

  return !isLoggedIn ? (
    <Navigate to="/login" />
  ) : (
    children
  )
}

export default PrivateRoute