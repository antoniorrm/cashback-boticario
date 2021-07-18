/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig } from 'axios'
import { getAccessToken } from './store'

const api = axios.create({
	baseURL: 'http://localhost:8000',
})

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
	if (getAccessToken()) {
		config.headers.Authorization = `Bearer ${getAccessToken()}`
	}
	return config
})

export default api
