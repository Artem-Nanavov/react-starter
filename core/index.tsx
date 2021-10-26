import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import Routes from 'components';

import { RootStoreProvider } from './store/RootStoreProvider';

import './styles/nullstyles.scss';

render(
	<BrowserRouter>
		<RootStoreProvider>
			<Routes />
		</RootStoreProvider>
	</BrowserRouter>,
	document.getElementById('app'),
);
