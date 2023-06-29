import { useRef } from 'react'
import Waiting from './Waiting'
import { useQuery } from 'react-query'
import { getHeroes } from '../api/heroes'
import { Hero } from '../types/hero'
import HeroLabel from './HeroLabel'

type SelectPlayerProps = {
  label?: string
  selectPlayer?: (hero: Hero) => void
}

const SelectPlayer = ({
  label = '',
  selectPlayer = (hero) => {
    void hero
  },
}: SelectPlayerProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { data, isError, isLoading, isFetching, error, isFetched, refetch } = useQuery(
    ['heroes', label],
    () => getHeroes({ name: inputRef.current?.value || '' }),
    {
      enabled: !!inputRef.current?.value,
    },
  )

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    if (inputRef.current?.value) refetch()
  }

  return (
    <Waiting isLoading={isLoading || isFetching}>
      <section>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor={`player${label}`}>Select Player {label}</label>
          <input type='text' id={`player${label}`} name={`player${label}`} ref={inputRef} />
          <button type='submit'>Search</button>
        </form>
        {isFetched && data && (
          <div className='inline-block'>
            {data.map((hero) => (
              <HeroLabel id={hero.id} name={hero.name} onClick={() => selectPlayer(hero)} />
            ))}
          </div>
        )}
      </section>
    </Waiting>
  )
}

export default SelectPlayer