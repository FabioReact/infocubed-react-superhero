import { createContext, useContext, useState } from 'react'

type AuthContextType = {
  connected: boolean
  onLogin: () => void
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const AuthContext = createContext<AuthContextType>(null!)

type Props = {
  children: React.ReactNode
}

export const AuthContextProvider = ({ children }: Props) => {
  const [connected, setConnected] = useState(false)
  const onLogin = () => {
    setConnected(true)
  }
  return <AuthContext.Provider value={{ connected, onLogin }}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)

// export {AuthContextProvider, useAuthContext}
