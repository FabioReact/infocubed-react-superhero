import ErrorBoundary from './hoc/ErrorBoundary'
// import Heroes from './pages/Heroes'
import SearchHeroes from './pages/SearchHeroes'

function App() {
  return (
    <ErrorBoundary>
      <h1>SuperHero App</h1>
      {/* <Heroes /> */}
      <SearchHeroes />
    </ErrorBoundary>
  )
}

export default App
