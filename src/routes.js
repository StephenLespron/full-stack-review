import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';

export default (
	<Switch>
		<Route exact path='/' component={Landing} />
		<Route path='/register' component={Register} />
		<Route path='/dashboard' component={Dashboard} />
		<Route path='/profile' component={Profile} />
	</Switch>
);
