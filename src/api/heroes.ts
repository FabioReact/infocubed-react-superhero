import { Hero } from '../types/hero'
import Fetcher, { BASE_URL } from './fetcher'

type GetHeroesParams = {
  name: string
  intelligence?: string
  speed?: string
}

export const getHeroes = ({ name, intelligence, speed }: GetHeroesParams): Promise<Hero[]> => {
  let query = `name_like=${name}`
  if (intelligence) query += `&powerstats.intelligence_gte=${intelligence}`
  if (speed) query += `&powerstats.speed_gte=${speed}`
  return Fetcher.get(`${BASE_URL}/heroes?${query}`).catch((error) => {
    console.log({ error })
    throw new Error('Error while fetching getHeroes')
  })
}

// export { getHeroes }
