import { useEffect, useState } from 'react'

const letters: string[] = []
for (let i = 97; i <= 122; i++) {
  letters.push(String.fromCharCode(i))
}

const Heroes = () => {
	const [heroes, setHeroes] = useState([])
  const [counter, setCounter] = useState(0)
  const [selectedLetter, setSelectedLetter] = useState('a')

  useEffect(() => {
    console.log('Rendu initial du composant Heroes')
    // Recuperer de l'API tout les heroes commençant par la lettre A
    fetch('http://localhost:4000/heroes')
      .then((response) => response.json())
      .then((data) => {
				console.log(data)
				setHeroes(data)
			})
    return () => {
      console.log('Destruction du composant Heroes')
    }
  }, [])

  useEffect(() => {
    console.log('Rendu initial du composant Heroes - Observer counter', counter)
    return () => {
      console.log('Destruction du composant Heroes - Oberver counter', counter)
    }
  }, [counter])

  const increment = () => {
    setCounter((c) => c + 1)
  }

  const onClickLetter = (letter: string) => {
    setSelectedLetter(letter)
  }

  return (
    <section>
      <h1>Heroes List</h1>
      <ul>
        {letters.map((letter) => (
          <li key={letter} onClick={() => onClickLetter(letter)}>
            {letter}
          </li>
        ))}
      </ul>
      <p>Counter Value: {counter}</p>
      <button onClick={increment}>Increment</button>
      <p>Vous avez cliquer sur: {selectedLetter}</p>
			<pre>{JSON.stringify(heroes, null, 2)}</pre>
    </section>
  )
}

export default Heroes
