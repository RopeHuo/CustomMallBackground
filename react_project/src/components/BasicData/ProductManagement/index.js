/* eslint-disable no-unused-vars */
import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = (app) => ({
	path: '/productManagement',
	title: '基础数据',
	component: dynamicWrapper(app, [], () => import('./components'))
});
export default (app) => createRoute(app, routesConfig);