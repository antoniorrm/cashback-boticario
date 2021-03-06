import { combineReducers } from 'redux'

import { StoreState } from '../createStore'

import auth from './auth/reducer'

export default combineReducers<StoreState>({
	auth,
	_persist: (state: any = null) => state,
})
