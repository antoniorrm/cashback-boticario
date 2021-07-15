/* eslint-disable arrow-body-style */
import React from 'react'
import { BrowserRouter, Redirect, Switch } from 'react-router-dom'
import RouteWithLayout from './components/RouteWithLayout'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import SignUp from './views/signUp/SignUp'
import SignIn from './views/signIn/SignIn'
import NotFoundView from './views/notFoundView/NotFoundView'

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<RouteWithLayout path='/' exact layout={MainLayout} component={Home} />
				<RouteWithLayout
					path='/sign-in'
					exact
					layout={AuthLayout}
					component={SignIn}
				/>
				<RouteWithLayout
					path='/sign-up'
					exact
					layout={AuthLayout}
					component={SignUp}
				/>
				<Redirect exact from='/redirect' to='/sign-in' />
				<RouteWithLayout exact layout={AuthLayout} path='/home' component={Home} />
				<RouteWithLayout
					component={NotFoundView}
					exact
					layout={AuthLayout}
					path='/not-found'
				/>
				<Redirect to='/not-found' />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes
