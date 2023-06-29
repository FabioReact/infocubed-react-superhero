import { useLoaderData, useParams } from 'react-router-dom'
import HeroCard from '../components/HeroCard'
import { getHeroById } from '../api/heroes'
import { useAuthContext } from '../context/auth-context'
import { Hero } from '../types/hero'
// import { useQuery } from 'react-query'
// import Waiting from '../components/Waiting'

const HeroDetails = () => {
  const hero = useLoaderData()
  const { connected } = useAuthContext()
  return (
    <section>
      <h1>Hero Details</h1>
      {connected && <button>Add to Favorite</button>}
      {/* {JSON.stringify(hero, null, 2)} */}
      <HeroCard hero={hero as Hero} />
    </section>
  )
}

export const loader = async ({ params }: any) => {
  const hero = await getHeroById(+(params.id || 1))
  console.log(hero)
  return hero
}

// const HeroDetails = () => {
//   const { id } = useParams()
//   const {
//     isLoading,
//     isError,
//     error,
//     isSuccess,
//     data: hero,
//   } = useQuery(['hero', id], () => getHeroById(+(id || 1)))
//   return (
//     <section>
//       <h1>Hero Details: {id}</h1>
//       {typeof +'test'}
//       <Waiting isLoading={isLoading}>
//         {isError && <p className='text-red-500'>{(error as Error).message}</p>}
//         {/* {JSON.stringify(hero, null, 2)} */}
//         {isSuccess && <HeroCard hero={hero} />}
//       </Waiting>
//     </section>
//   )
// }

export default HeroDetails
