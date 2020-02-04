import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props => {
				if (localStorage.getItem('token')) {
					console.log('AUTHENTICATED');
					console.log('props from privateRoute', props);
					return <Component {...props}/>;
				} else {
					return <Redirect to="/login" />;
				}
			}}
		/>
	);
};

export default PrivateRoute;
