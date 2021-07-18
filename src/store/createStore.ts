import { createStore, applyMiddleware, Middleware, Reducer } from 'redux'
import { PersistState } from 'redux-persist'
import { AuthAction, AuthState } from './modules/auth/types'

export interface StoreState {
	_persist: PersistState
	auth: AuthState
}

export type StoreAction = AuthAction

export default (
	reducers: Reducer<StoreState, StoreAction>,
	middlewares: Middleware[]
) => {
	const enhancer = applyMiddleware(...middlewares)

	return createStore(reducers, enhancer)
}
