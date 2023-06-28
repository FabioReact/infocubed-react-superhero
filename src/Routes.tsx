import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Heroes from './pages/Heroes'
import SearchHeroes from './pages/SearchHeroes'
import Layout from './hoc/Layout'
import Login from './pages/Login'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<p>Home Page</p>} />
      <Route path='search' element={<SearchHeroes />} />
      <Route path='heroes' element={<Heroes />} />
      <Route path='login' element={<Login />} />
      <Route path='*' element={ <div>Oops, 404 à implementer</div> } />
    </Route>,
  ),
)