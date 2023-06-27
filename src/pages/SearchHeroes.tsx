import { useRef, useState } from 'react'
import { getHeroes } from '../api/heroes'
import { Hero } from '../types/hero'
import HeroCard from '../components/HeroCard'

const SearchHeroes = () => {
  const [search, setSearch] = useState('')
  const intRef = useRef<HTMLInputElement>(null)
  const speedRef = useRef<HTMLInputElement>(null)
  const [heroes, setHeroes] = useState<Hero[]>([])

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    const result = await getHeroes({
      name: search,
      intelligence: intRef.current?.value,
      speed: speedRef.current?.value,
    })
    setHeroes(result)
  }

  return (
    <section>
      <h1>Search Heroes</h1>
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='intelligence'>Intelligence</label>
          <input
            type='range'
            min='1'
            max='100'
            id='intelligence'
            name='intelligence'
            ref={intRef}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='speed'>Speed</label>
          <input type='range' min='1' max='100' id='speed' name='speed' ref={intRef} />
        </fieldset>
        <button type='submit'>Search</button>
      </form>
      <div className='flex flex-wrap justify-center gap-4'>
        {heroes.map((hero: Hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </section>
  )
}

export default SearchHeroes
