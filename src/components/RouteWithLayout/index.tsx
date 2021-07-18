/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useSelector } from 'react-redux'
import {
	Route,
	Redirect,
	RouteProps,
	RouteComponentProps,
} from 'react-router-dom'
import { StoreState } from '../../store/createStore'

type RouteWithLayoutProps = RouteProps & {
    // eslint-disable-next-line react/require-default-props
    auth?: boolean
	layout: React.ComponentType<any>
	component: React.ComponentType<any>
}

const RouteWithLayout = (
	props: RouteWithLayoutProps
) => {
	const { isSignedIn } = useSelector((state: StoreState) => state.auth)

	const {
		auth: Auth,
		layout: Layout,
		component: Component,
		location,
		...rest
	} = props
	return (
		<Route
			{...rest}
			render={(matchProps: RouteComponentProps) =>
				// eslint-disable-next-line no-nested-ternary
				Auth ? (
					isSignedIn ? (
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
				) : (
					<Layout>
						<Component {...matchProps} />
					</Layout>
				)
			}
		/>
	)
}

export default RouteWithLayout
