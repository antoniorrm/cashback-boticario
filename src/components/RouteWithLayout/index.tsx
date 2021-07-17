/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import {
	Route,
	Redirect,
	RouteProps,
	RouteComponentProps,
} from 'react-router-dom'

type RouteWithLayoutProps = RouteProps & {
	layout: React.ComponentType<any>
	component: React.ComponentType<any>
}

const RouteWithLayout = (props: RouteWithLayoutProps) => {
	const { layout: Layout, component: Component, location, ...rest } = props
	return (
		<Route
			{...rest}
			render={(matchProps: RouteComponentProps) =>
				location ? (
					<Layout>
						<Component {...matchProps} />
					</Layout>
				) : (
					<Redirect
						to={{
							pathname: '/redirect',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	)
}

export default RouteWithLayout
