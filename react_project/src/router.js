import React from 'react';
import { Router, Switch, Route } from 'dva/router';

import App from './containers/App';
import Index from './containers/Index';

export default ({ history, app }) => {
	return <Router history={history}>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/index" component={Index} />
		</Switch>
	</Router>
}
