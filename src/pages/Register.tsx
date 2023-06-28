import { useState } from 'react'
import { useRegisterForm } from '../hooks/useRegisterForm'
// import { useNavigate } from 'react-router-dom'


// const UserRegistration = z
//   .object({
//     email: emailValidation,
//     password: passwordValidation,
//     passwordConfirmation: z.string(),
//   })
//   .refine((data) => data.password === data.passwordConfirmation, {
//     message: "Passwords don't match",
//     path: ['passwordConfirmation'],
//   })

const Register = () => {
  // const [formFields, dispatch] = useReducer(reducer, intitialState)
  const { formFields, updatePassword, updateEmail } = useRegisterForm()
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  // const navigate = useNavigate()

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    // try {
    //   const result = UserRegistration.parse({
    //     email: formFields.email,
    //     password: formFields.password,
    //     passwordConfirmation: passwordConfirmation
    //   })
    // } catch (error) {
    //   if (error instanceof z.ZodError) {
    //     error.issues.map((issue) => {
    //       if (issue.path[0] === 'email') {
    //         // setEmailErrors([issue.message])
    //       }
    //       if (issue.path[0] === 'password') {
    //         // setPasswordErrors([issue.message])
    //       }
    //     })
    //   }
    // }
    // Appel à l'API pour se connecter
    // Erreur -> Afficher les erreurs
    // Succès -> Redirection
    // navigate('/')
  }

  const onChangePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    updatePassword(e.target.value)
  }

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
            value={formFields.email}
            onChange={(e) => updateEmail(e.target.value)}
          />
          {formFields.emailErrors.map((emailError) => (
            <span className='text-red-500 block font-semibold'>{emailError}</span>
          ))}
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password:</label>
          <input
            type='text'
            name='password'
            id='password'
            value={formFields.password}
            onChange={onChangePasswordHandler}
          />
          {formFields.passwordErrors.map((passwordError) => (
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
