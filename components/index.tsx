import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import HopePage from './home';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HopePage} />
	</Switch>
);

export default Routes;
