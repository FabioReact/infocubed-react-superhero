import { useReducer } from 'react'

const initialState = { counter: 0, initialCounter: 0 }

type ActionType =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'decrementBy10' }
  | { type: 'incrementBy5' }
  | { type: 'reset' }

const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'increment': {
      const result = structuredClone(state)
      result.counter = result.counter + 1
      return result
    }
    case 'reset':
      return {
        ...state,
        counter: state.initialCounter,
      }
    default:
      throw new Error(`CounterReducer - Not a valid action type: ${action.type}`)
  }
}

const Counter = () => {
  // const [counterState, setCounterState] = useState({ counter: 0 })
  const [state, dispatch] = useReducer(reducer, initialState)

  // const increment = () => setCounterState((c) => ({counter: c.counter + 1}))
  // const incrementBy5 = () => setCounterState((c) => ({counter: c.counter + 5}))
  // const decrement = () => setCounterState((c) => ({counter: c.counter - 1}))

  return (
    <section>
      <h1>Counter</h1>
      <p>Valeur du compteur: {state.counter}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Incrementer</button>
      <button onClick={() => dispatch({ type: 'incrementBy5' })}>+5</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrementer</button>
      <button onClick={() => dispatch({ type: 'decrementBy10' })}>-10</button>
    </section>
  )
}

export default Counter
