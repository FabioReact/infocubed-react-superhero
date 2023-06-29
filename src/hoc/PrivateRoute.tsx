import React from 'react'
import { useAuthContext } from '../context/auth-context'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { connected } = useAuthContext()
	const location = useLocation();

  if (!connected) return <Navigate to='/login' state={{ from: location }} replace />

  return children
}

export default PrivateRoute
