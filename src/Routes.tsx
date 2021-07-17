/* eslint-disable arrow-body-style */
import React from 'react'
import { BrowserRouter, Redirect, Switch } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import NotFoundView from './pages/NotFoundView'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import RouteWithLayout from './components/RouteWithLayout'

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
