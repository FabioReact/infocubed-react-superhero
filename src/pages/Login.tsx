import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const onSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault()
		console.log(email, password)
		// Appel à l'API pour se connecter
		// Erreur -> Afficher les erreurs
		// Succès -> Redirection
		navigate('/')
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
