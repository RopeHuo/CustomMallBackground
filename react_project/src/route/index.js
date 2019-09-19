/* eslint-disable no-unused-vars */
import React from 'react'
import { Router, Switch } from 'dva/router';

import {routerConfig,createRoute} from './routerTable'

function RouterConfig({ history, app }) {
	history.listen((path)=>{
		var retrieval = [];
		var pathArr = routerConfig();
		for (let i = 0; i < pathArr.length; i++) {
			const paths = pathArr[i];
			retrieval.push(paths.path)
			if(paths.childRoutes){
				for (let k = 0; k < paths.childRoutes.length; k++) {
					const childRoute = paths.childRoutes[k];
					retrieval.push(childRoute.key)
				}
			}		
		}
		if (!retrieval.includes(path.pathname)){
			window.location.href = 'http://127.0.0.1:3000/#/error/404';
		}
	})
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
