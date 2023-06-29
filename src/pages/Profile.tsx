import HeroCard from '../components/HeroCard'
import { useAppSelector } from '../redux/hooks'

const Profile = () => {
	const heroes = useAppSelector(state => state.favoriteHeroes.heroes)
	return (
		<section>
			<h1>Profile</h1>
			<div>
				<h2>Favorite Heroes</h2>
				{heroes.map(hero => <HeroCard key={hero.id} hero={hero} />)}
			</div>
		</section>
	)
}

export default Profile