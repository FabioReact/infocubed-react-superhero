import { Hero } from './../../types/hero'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface State {
  heroes: Hero[]
}

const initialState: State = {
  heroes: []
}

export const favoriteHeroesSlice = createSlice({
  name: 'favoriteHeroes',
  initialState,
  reducers: {
		addFavoriteHero: (state, action: PayloadAction<Hero>) => {
			const index = state.heroes.findIndex(hero => hero.id === action.payload.id)
			if (index === -1)
				state.heroes.push(action.payload)
		},
		deleteFavoriteHero: (state, action: PayloadAction<number>) => {
			const index = state.heroes.findIndex(hero => hero.id === action.payload)
			if (index !== -1)
				state.heroes.splice(index)
		}
  },
})

// export const getFavoriteHeroes = (state: State) => state.heroes

// Action creators are generated for each case reducer function
export const { addFavoriteHero, deleteFavoriteHero } = favoriteHeroesSlice.actions

export default favoriteHeroesSlice.reducer