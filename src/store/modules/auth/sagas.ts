import { takeLatest, call, put, all } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'

import api from '../../../service/api'
import * as actions from './actions'
import { UserData } from './types'
import history from '../../../service/history'

export function* signIn({ payload }: ActionType<typeof actions.signInRequest>) {
	try {
		const { email, password } = payload
		const { data } = yield call(api.post, '/auth/login', { email, password })

        const userDataDecode: UserData = jwt_decode(data.access_token)

		yield put(
			actions.signInSuccess({
				token: data.access_token,
				userData: userDataDecode,
			})
		)
        history.push("/home")
	} catch (err) {
		yield put(actions.signInFailure())
	}
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)])
