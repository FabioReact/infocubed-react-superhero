import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Heroes from './pages/Heroes'
import SearchHeroes from './pages/SearchHeroes'
import Layout from './hoc/Layout'
import Login from './pages/Login'
import Register from './pages/Register'
import Battle from './pages/Battle'
import HeroDetails, {loader} from './pages/HeroDetails'
import Home from './pages/Home'
import Profile from './pages/Profile'
import PrivateRoute from './hoc/PrivateRoute'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='search' element={<SearchHeroes />} />
      <Route path='heroes' element={<Heroes />} />
      <Route path='heroes/:id' element={<HeroDetails />} loader={loader} errorElement={<p>Oops, something went wrong</p>} />
      <Route path='battle' element={<Battle />} />
      <Route path='login' element={<Login />} />
      <Route path='profile' element={
        <PrivateRoute><Profile /></PrivateRoute>
      } />
      <Route path='register' element={<Register />} />
      <Route path='*' element={ <div>Oops, 404 à implementer</div> } />
    </Route>,
  ),
)
