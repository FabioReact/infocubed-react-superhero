import { useEffect, useState } from 'react'
import Fetcher, { BASE_URL } from '../api/fetcher'
import { Hero } from '../types/hero'
import HeroCard from '../components/HeroCard'
import Waiting from '../components/Waiting'
import Spinner from '../components/Spinner/Spinner'

const letters: string[] = []
for (let i = 97; i <= 122; i++) {
  letters.push(String.fromCharCode(i))
}

const Heroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedLetter, setSelectedLetter] = useState('a')

  useEffect(() => {
    console.log('Rendu initial du composant Heroes')
    const controller = new AbortController()
    setIsLoading(true)
    // Recuperer de l'API tout les heroes commençant par la lettre A
    Fetcher.get(`${BASE_URL}/heroes?name_like=^${selectedLetter}`, {
      method: 'GET',
      signal: controller.signal,
    })
      .then((data) => {
        setIsLoading(false)
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
      <Waiting isLoading={isLoading}>
        <div className='flex flex-wrap gap-4 justify-center'>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </Waiting>
    </section>
  )
}

export default Heroes
