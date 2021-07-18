import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { Reducer } from 'redux'
import { StoreAction, StoreState } from './createStore'

export default (reducers: Reducer<StoreState, StoreAction>) => {
	const persistedReducers = persistReducer(
		{
			key: 'cashback',
			storage,
			whitelist: ['auth'],
		},
		reducers
	)

	return persistedReducers
}
