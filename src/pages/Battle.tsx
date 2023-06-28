import { useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { Hero } from '../types/hero'
import { getHeroes } from '../api/heroes'

type HeroLabelProps = {
  id: number
  name: string
}

const HeroLabel = ({ id, name }: HeroLabelProps) => {
  return (
    <p>
      <span>#{id}</span>
      {name}
    </p>
  )
}

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
  const { data, isError, isLoading, error, isFetched, refetch } = useQuery(
    ['heroes', label],
    () => getHeroes({ name: inputRef.current?.value || '' }),
    {
      enabled: !!inputRef.current?.value,
    },
  )
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    refetch()
    // inputRef.current?.value // hulk -> Requete API
  }
  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor={`player${label}`}>Select Player {label}</label>
        <input type='text' id={`player${label}`} name={`player${label}`} ref={inputRef} />
        <button type='submit'>Search</button>
      </form>
      {isFetched && data && (
        <div>
          {data.map((hero) => (
            <HeroLabel id={hero.id} name={hero.name} />
          ))}
        </div>
      )}
    </section>
  )
}

const Battle = () => {
  const [playerOne, setPlayerOne] = useState<Hero | null>(null)
  const [playerTwo, setPlayerTwo] = useState<Hero | null>(null)
  return (
    <section>
      <h1>Battle</h1>
      <div>
        <SelectPlayer label='One' selectPlayer={setPlayerOne} />
        <SelectPlayer label='Two' selectPlayer={setPlayerTwo} />
        Battle
      </div>
    </section>
  )
}

export default Battle
