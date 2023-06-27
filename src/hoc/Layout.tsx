import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>Heroes</li>
            <li>Search</li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>Copyright</footer>
    </>
  )
}

export default Layout