import { AuthState, AuthAction } from './types'

const initialState: AuthState = {
	loadingSignInRequest: false,
	isSignedIn: false,
	error: false,
	token: null,
	userData: null
}

export default function auth(
	state = initialState,
	action: AuthAction
): AuthState {
	switch (action.type) {
		case '@auth/SIGN_IN_REQUEST':
			return {
				...state,
				loadingSignInRequest: true,
			}
		case '@auth/SIGN_IN_SUCCESS':
			return {
				...state,
				loadingSignInRequest: false,
				isSignedIn: true,
				error: false,
				token: action.payload.token,
				userData: action.payload.userData,
			}
		case '@auth/SIGN_IN_FAILURE':
			return {
				...state,
				error: true,
			}
		case '@auth/SIGN_OUT':
			return initialState
		default:
			return state
	}
}
