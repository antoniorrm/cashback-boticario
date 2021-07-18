/* eslint-disable import/prefer-default-export */
import { store } from '../store'

export function getAccessToken() {
	return store.getState().auth.token
}