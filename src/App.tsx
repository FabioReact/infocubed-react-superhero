import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes'
import ErrorBoundary from './hoc/ErrorBoundary'
import { AuthContextProvider } from './context/auth-context'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Suspense } from 'react'
import Spinner from './components/Spinner/Spinner'
// import { useState } from 'react'

const queryClient = new QueryClient()

// Si mon utilisateur est connecté, alors je peux ajouter un hero à ses favoris via la page HeroDetails
// L'utilisateur pourra voir ses heros favoris dans un page Favoris

function App() {
  // const [connected, setConnected] = useState(false)
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AuthContextProvider>
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={<Spinner />}>
              <RouterProvider router={router} />
            </Suspense>
          </QueryClientProvider>
        </AuthContextProvider>
      </Provider>
    </ErrorBoundary>
  )
}

export default App
