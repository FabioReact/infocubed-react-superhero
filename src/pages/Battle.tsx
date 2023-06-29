import { useState } from 'react'
import { Hero } from '../types/hero'
import HeroCard from '../components/HeroCard'
import SelectPlayer from '../components/SelectPlayer'

const Battle = () => {
  const [playerOne, setPlayerOne] = useState<Hero | null>(null)
  const [playerTwo, setPlayerTwo] = useState<Hero | null>(null)
  return (
    <section>
      <h1>Battle</h1>
      <div className='flex justify-center gap-24'>
        <SelectPlayer label='One' selectPlayer={setPlayerOne} />
        <SelectPlayer label='Two' selectPlayer={setPlayerTwo} />
      </div>
      <div className='flex justify-center gap-24'>
        {playerOne && <HeroCard hero={playerOne} />}
        {playerTwo && <HeroCard hero={playerTwo} />}
      </div>
      {playerOne && playerTwo && (
        <div className='flex justify-center'>
          <button>Start Battle</button>
        </div>
      )}
    </section>
  )
}

export default Battle
