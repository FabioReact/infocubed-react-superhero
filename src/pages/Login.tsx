import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/auth-context'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { onLogin } = useAuthContext()

  const location = useLocation()
  const from = location.state?.from?.pathname || "/";

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    console.log(email, password)
    onLogin()
    // Appel à l'API pour se connecter
    // Erreur -> Afficher les erreurs
    // Succès -> Redirection
    navigate(from, { replace: true })
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <button type='submit'>Login</button>
      </form>
    </section>
  )
}

export default Login
