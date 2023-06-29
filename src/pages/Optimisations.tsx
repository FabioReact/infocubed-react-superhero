import React, { memo, useCallback, useMemo, useState } from 'react'

type ButtonProps = {
	onClick: any
	children: React.ReactNode
}

const Button = memo(({ children, onClick }: ButtonProps) => {
	console.log(`Render of Button ${children}`)
	return (
		<button onClick={onClick}>{children}</button>
	)
})

// React.memo est utile pour éviter un rendu inutile si les props n'ont pas changées
const ChildComponent = memo(() => {
	console.log('Render of ChildComponent')
	return <p>Some Child Component</p>
})

const expensiveConpute = (a: number, b: number) => {
	let counter = 1000000000
	while (counter > 0) {
		counter--
	}
	return a * b
}

const Optimisations = () => {
	const [counter, setCounter] = useState(0)
	const [value, setValue] = useState(5)
	// useCallback est utile pour mémoiser la référence d'un callback tout au long des différents rendu
	const increment = useCallback(() => setCounter(c => c + 1), [])
	const decrement = useCallback(() => setCounter(c => c - 1), [])
	const incrementByValue = useCallback(() => setCounter(c => c + value), [value])
	// useMemo est utile pour mémoiser le resultat d'une fonction
	const resultExpensiveConpute = useMemo(() => expensiveConpute(5, 12), [])
	return (
		<section>
			<h1>Optimisations</h1>
			<p>Counter: {counter}</p>
			<p>Valeur d'un calcul intensif: {resultExpensiveConpute}</p>
			<label>
				<input type="number" value={value} onChange={(e) => setValue(+e.target.value)} />
			</label>
			<ChildComponent />
			{/* <button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button> */}
			<Button onClick={increment}>Increment</Button>
			<Button onClick={decrement}>Decrement</Button>
			<Button onClick={incrementByValue}>Increment by value</Button>
		</section>
	)
}

export default Optimisations