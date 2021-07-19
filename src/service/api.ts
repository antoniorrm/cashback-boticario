/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig } from 'axios'
import { getAccessToken } from './store'

const api = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
})

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
	if (getAccessToken()) {
		config.headers.Authorization = `Bearer ${getAccessToken()}`
	}
	return config
})

export default api
