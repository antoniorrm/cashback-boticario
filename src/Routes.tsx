/* eslint-disable arrow-body-style */
import React from 'react'
import { BrowserRouter, Redirect, Switch } from 'react-router-dom'
import RouteWithLayout from './components/RouteWithLayout'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import Home from './views/Home'
import SignIn from './views/SignIn'
import SignUp from './views/SignUp'

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
			</Switch>
		</BrowserRouter>
	)
}

export default Routes
