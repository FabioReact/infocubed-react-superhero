import { useEffect, useState } from 'react'
import Fetcher, { BASE_URL } from '../api/fetcher'
import { Hero } from '../types/hero'
import HeroCard from '../components/HeroCard'

const letters: string[] = []
for (let i = 97; i <= 122; i++) {
  letters.push(String.fromCharCode(i))
}

const Heroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [counter, setCounter] = useState(0)
  const [selectedLetter, setSelectedLetter] = useState('a')

  useEffect(() => {
    console.log('Rendu initial du composant Heroes')
    const controller = new AbortController()
    // Recuperer de l'API tout les heroes commençant par la lettre A
    Fetcher.get(`${BASE_URL}/heroes?name_like=^${selectedLetter}`, {
      method: 'GET',
      signal: controller.signal,
    })
      .then((data) => {
        console.log(data)
        setHeroes(data)
      })
      .catch((error) => {
        console.log({
          error, // error: error
        })
      })
    return () => {
      console.log('Destruction du composant Heroes')
      controller.abort()
    }
  }, [selectedLetter])

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
      <ul className='flex justify-center gap-2 uppercase font-semibold text-xl my-4'>
        {letters.map((letter) => (
          <li
            className={`cursor-pointer ${letter === selectedLetter && 'text-red-600'}`}
            key={letter}
            onClick={() => onClickLetter(letter)}
          >
            {letter}
          </li>
        ))}
      </ul>
      <p>Counter Value: {counter}</p>
      <button onClick={increment}>Increment</button>
      {/* <pre>{JSON.stringify(heroes, null, 2)}</pre> */}
      <div className='flex flex-wrap gap-4 justify-center'>
        {heroes.map(hero => <HeroCard key={hero.id} hero={hero} /> )}
      </div>
    </section>
  )
}

export default Heroes
