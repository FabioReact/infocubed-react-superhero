import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { ZodError, z } from 'zod'

// const regex = new RegExp('^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{10,100}$')
const UserRegistration = z
  .object({
    email: z.string().email({ message: 'Must provide a valid email' }),
    password: z
      .string()
      .regex(new RegExp('(?=.*[@$!%*#?&])'), { message: 'Must contain a special character' })
      .min(10),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ['passwordConfirmation'],
  })

const passwordValidation = z
  .string()
  .regex(new RegExp('(?=.*[@$!%*#?&])'), { message: 'Must contain a special character' })
  .min(10)

const Register = () => {
  // const [formFields, dispatch] = userReducer
  const [email, setEmail] = useState('')
  const [emailErrors, setEmailErrors] = useState<string[]>([])
  const [password, setPassword] = useState('')
  const [passwordErrors, setPasswordErrors] = useState<string[]>([])
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  // const navigate = useNavigate()

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    console.log(email, password, passwordConfirmation)
    setEmailErrors([])
    setPasswordErrors([])
    try {
      const result = UserRegistration.parse({
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation
      })
      console.log(result)
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log(error.issues)
        error.issues.map((issue) => {
          if (issue.path[0] === 'email') {
            setEmailErrors([issue.message])
          }
          if (issue.path[0] === 'password') {
            setPasswordErrors([issue.message])
          }
        })
      }
    }
    // Appel à l'API pour se connecter
    // Erreur -> Afficher les erreurs
    // Succès -> Redirection
    // navigate('/')
  }

  const onChangePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    setPasswordErrors([])
    // Faire les vérifications ici pour savoir si le password est correct
    const result = passwordValidation.safeParse(e.target.value)
    if (!result.success) {
      const errors = result.error.issues.reduce((result, issue) => {
        result.push(issue.message)
        return result
      }, [] as string[])
      setPasswordErrors(errors)
    }
  }

  // email, password, passwordConfirmation
  // contraintes password: une majuscule, un caractere speciale, un chiffre, min 10, max 100
  // contraintes email: format correcte (xxx@xxx.xxx) aucun caractere special
  // Si erreur, l'afficher après avoir cliqué sur Register

  return (
    <section className='bg-red'>
      <h1>Register</h1>
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
          {emailErrors.map((emailError) => (
            <span className='text-red-500 block font-semibold'>{emailError}</span>
          ))}
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={onChangePasswordHandler}
          />
          {passwordErrors.map((passwordError) => (
            <span className='text-red-500 block font-semibold'>- {passwordError}</span>
          ))}
        </fieldset>
        <fieldset>
          <label htmlFor='passwordConfirmation'>Confirm Password:</label>
          <input
            type='password'
            name='passwordConfirmation'
            id='passwordConfirmation'
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </fieldset>
        <button type='submit'>Register</button>
      </form>
    </section>
  )
}

export default Register
