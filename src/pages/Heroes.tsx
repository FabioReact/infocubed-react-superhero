import { useState } from 'react'

const letters: string[] = []
for (let i = 97; i <= 122; i++) {
  letters.push(String.fromCharCode(i))
}

const Heroes = () => {
  const [counter, setCounter] = useState(0)
  const [selectedLetter, setSelectedLetter] = useState('a')
  // const currentValue = result[0]
  // const updateValue = result[1]
  const increment = () => {
    // setCounter est asynchrone
    setCounter((c) => c + 1)
  }

  const onClickLetter = (letter: string) => {
    // Je met à jour l'état avec la lettre qui vient d'etre cliquée
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
    </section>
  )
}

export default Heroes
