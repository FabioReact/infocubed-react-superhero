import { Outlet, NavLink } from 'react-router-dom'

const Layout = () => {
  const getActiveClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-red-600' : ''
  return (
    <>
      <header>
        <nav>
          <ul className='flex justify-center gap-4 font-semibold text-xl mb-4'>
            <li>
              <NavLink to='/' className={getActiveClassName}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/heroes' className={getActiveClassName}>
                Heroes
              </NavLink>
            </li>
            <li>
              <NavLink to='/search' className={getActiveClassName}>
                Search
              </NavLink>
            </li>
            <li>
              <NavLink to='/login' className={getActiveClassName}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to='/register' className={getActiveClassName}>
                Register
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer className='text-right'>Copyright</footer>
    </>
  )
}

export default Layout
