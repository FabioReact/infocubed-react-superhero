import { useReducer } from 'react'
import { z } from 'zod'

type ActionType = {
  type: 'updateEmail'
  emailValue: string
} | {
  type: 'updatePassword'
  passwordValue: string
}

const passwordValidation = z
  .string()
  .regex(new RegExp('(?=.*[@$!%*#?&<>])'), { message: 'Must contain a special character' })
  .regex(new RegExp('(?=.*[A-Z])'), { message: 'Must contain an uppercase' })
  .regex(new RegExp('(?=.*[a-z])'), { message: 'Must contain a lowercase' })
  .regex(new RegExp('(?=.*[0-9])'), { message: 'Must contain a digit' })
  .min(10)
  .max(100)
const emailValidation = z.string().email({ message: 'Must provide a valid email' })

const initialState = {
  email: '',
  emailErrors: [] as string[],
  password: '',
  passwordErrors: [] as string[],
}

const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'updateEmail': {
      const newState = structuredClone(state)
      newState.email = action.emailValue
      const validationResult = emailValidation.safeParse(action.emailValue)
      if (!validationResult.success) {
        newState.emailErrors = validationResult.error.issues.reduce((result, issue) => {
          result.push(issue.message)
          return result
        }, [] as string[])
      } else {
        newState.emailErrors = []
      }
      return newState
    }
    case 'updatePassword': {
      const newState = structuredClone(state)
      newState.password = action.passwordValue
      const result = passwordValidation.safeParse(action.passwordValue)
      if (!result.success) {
        newState.passwordErrors = result.error.issues.reduce((result, issue) => {
          result.push(issue.message)
          return result
        }, [] as string[])
      } else {
        newState.passwordErrors = []
      }
      return newState
    }
    default:
      throw new Error('Not a valid action type (Redister Reducer)')
  }
}

export const useRegisterForm = () => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const updatePassword = (value: string) => dispatch({
		type: 'updatePassword',
		passwordValue: value,
	})
	const updateEmail = (value: string) => dispatch({
		type: 'updateEmail',
		emailValue: value,
	})

	return {
		formFields: state,
		updatePassword,
		updateEmail,
	}
}