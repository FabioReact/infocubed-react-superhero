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
			state.heroes.push(action.payload)
		}
  },
})

// Action creators are generated for each case reducer function
export const { addFavoriteHero } = favoriteHeroesSlice.actions

export default favoriteHeroesSlice.reducer