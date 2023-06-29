import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes'
import ErrorBoundary from './hoc/ErrorBoundary'
import { AuthContextProvider } from './context/auth-context'
// import { useState } from 'react'

const queryClient = new QueryClient()

// Si mon utilisateur est connecté, alors je peux ajouter un hero à ses favoris via la page HeroDetails
// L'utilisateur pourra voir ses heros favoris dans un page Favoris

function App() {
  // const [connected, setConnected] = useState(false)
  return (
    <ErrorBoundary>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthContextProvider>
    </ErrorBoundary>
  )
}

export default App
