/* eslint-disable no-unused-vars */
import React from 'react'
import { Router, Switch } from 'dva/router';

import {routerConfig,createRoute} from './routerTable'

function RouterConfig({ history, app }) {
	// history.listen((path)=>{
	// 	var retrieval = [];
	// 	const pathArr = routerConfig();
	// 	const path_father = pathArr.map(item=>item.path)
	// 	const path_child = pathArr
	// 	.find(item => item.childRoutes).childRoutes
	// 	.map(item => item.key)
	// 	retrieval = retrieval.concat(path_child).concat(path_father)

	// 	if (!retrieval.includes(path.pathname)){
	// 		// window.location.href = '/#/error/404';
	// 	}
	// })
	return (
		<Router history={history}>
			<Switch>
				<Router history={history}>
					{createRoute(app)}
				</Router>	
			</Switch>
		</Router>
	);
}

export default RouterConfig;
