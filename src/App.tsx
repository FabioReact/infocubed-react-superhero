import { router } from './Routes'
import ErrorBoundary from './hoc/ErrorBoundary'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  )
}

export default App
