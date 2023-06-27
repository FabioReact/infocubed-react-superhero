import { useRef, useState } from 'react'
import { getHeroes } from '../api/heroes'
import { Hero } from '../types/hero'
import HeroCard from '../components/HeroCard'

const SearchHeroes = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  const [heroes, setHeroes] = useState<Hero[]>([])

  const onSubmitHandler = async () => {
    if (searchRef.current?.value) {
      const result = await getHeroes({
				name: searchRef.current.value
			})
      setHeroes(result)
    }
  }

  return (
    <section>
      <h1>Search Heroes</h1>
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' ref={searchRef} />
        </fieldset>
        <fieldset>
          <label htmlFor='intelligence'>intelligence</label>
          <input
            type='range'
            min='1'
            max='100'
            id='intelligence'
            name='intelligence'
            ref={searchRef}
          />
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
