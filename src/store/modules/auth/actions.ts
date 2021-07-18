import { action } from 'typesafe-actions'
import history from '../../../service/history'
import { UserData } from './types'

export function signInRequest({
	email,
	password,
}: {
	email: string
	password: string
}) {
	return action('@auth/SIGN_IN_REQUEST', {
		email,
		password,
	})
}

export function signInSuccess({ token, userData }: { token: string, userData: UserData }) {
	return action('@auth/SIGN_IN_SUCCESS', {
		token,
		userData,
	})
}

export function signInFailure() {
	return action('@auth/SIGN_IN_FAILURE')
}

export function signOut() {
    history.push("/sign-in")
	return action('@auth/SIGN_OUT')
}
