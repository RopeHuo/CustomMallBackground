/* eslint-disable no-unused-vars */
import React from 'react'
import { Router, Switch } from 'dva/router';

import FrontendAuth from '@/components/FrontendAuth/FrontendAuth'
import { routerConfig, createRoute} from './routerTable'

function RouterConfig({ history, app }) {
	return (
		<Router history={history}>
			<Switch>
				{/* <FrontendAuth history={history} config={routerConfig}> */}
				<Router history={history}>{createRoute(app)}</Router>
				{/* </FrontendAuth> */}
			</Switch>
		</Router>
	);
}

export default RouterConfig;
