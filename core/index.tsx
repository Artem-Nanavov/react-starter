import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import Routes from 'components';
import './styles/nullstyles.scss';

render(
	<BrowserRouter>
		<Routes />
	</BrowserRouter>,
	document.getElementById('app'),
);
