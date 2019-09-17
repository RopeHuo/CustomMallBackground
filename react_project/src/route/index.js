/* eslint-disable no-unused-vars */
import React from 'react'
import { Router, Switch } from 'dva/router';

import FrontendAuth from '@/components/FrontendAuth/FrontendAuth'
import { routerConfig } from './routerTable'
function RouterConfig({ history, app }) {
	return (
		<Router history={history}>
			<Switch>
				<FrontendAuth config={routerConfig}></FrontendAuth>
			</Switch>
		</Router>
	);
}

export default RouterConfig;
