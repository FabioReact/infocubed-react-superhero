import Fetcher, { BASE_URL } from './fetcher'

type GetHeroesParams = {
  name: string
  intelligence?: string
}

export const getHeroes = ({ name, intelligence }: GetHeroesParams) => {
  let query = `name_like=${name}`
  if (intelligence) query += `&powerstats.intelligence_gte${intelligence}`
  return Fetcher.get(`${BASE_URL}/heroes?${query}`).catch((error) => {
    console.log({ error })
    throw new Error('Error while fetching getHeroes')
  })
}

// export { getHeroes }
