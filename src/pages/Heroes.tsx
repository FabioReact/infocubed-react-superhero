import { useState } from 'react'
import HeroCard from '../components/HeroCard'
import Waiting from '../components/Waiting'
import { useGetHeroes } from '../hooks/useGetHeroes'
import { Link } from 'react-router-dom'
import { useGetHeroesByLetterQuery } from '../redux/services/heroes'

const letters: string[] = []
for (let i = 97; i <= 122; i++) {
  letters.push(String.fromCharCode(i))
}

const Heroes = () => {
  const [selectedLetter, setSelectedLetter] = useState('a')
  // const { heroes, isLoading, isError, errorMessage } = useGetHeroes(selectedLetter)
  const { isLoading, isError, data: heroes } = useGetHeroesByLetterQuery(selectedLetter)

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
          {heroes && heroes.map((hero) => (
            <Link to={`${hero.id}`}>
              <HeroCard key={hero.id} hero={hero} />
            </Link>
          ))}
        </div>
      </Waiting>
      {isError && <p className='text-red-500'>Error: </p> }
    </section>
  )
}

export default Heroes
