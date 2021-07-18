/* eslint-disable arrow-body-style */
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Switch } from 'react-router-dom'
import RouteWithLayout from '../components/RouteWithLayout'
import AuthLayout from '../layouts/AuthLayout'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import NotFoundView from '../pages/NotFoundView'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import { StoreState } from '../store/createStore'



const Routes = () => {
	const { isSignedIn } = useSelector((state: StoreState) => state.auth)

	return (
		<Switch>
			<RouteWithLayout auth path='/' exact layout={MainLayout} component={Home} />
			{/* <Redirect exact from='/' to='/home' /> */}
			{!isSignedIn ? (
				<>
					<RouteWithLayout
						exact
						layout={AuthLayout}
						path='/sign-up'
						component={SignUp}
					/>
					<RouteWithLayout
						exact
						layout={AuthLayout}
						path='/sign-in'
						component={SignIn}
					/>
				</>
			) : (
				<Redirect to='/' />
			)}
			<RouteWithLayout
				auth
				exact
				layout={MainLayout}
				path='/home'
				component={Home}
			/>
			<RouteWithLayout
				auth
				component={NotFoundView}
				exact
				layout={AuthLayout}
				path='/not-found'
			/>
			<Redirect to='/not-found' />
		</Switch>
	)
}

export default Routes
