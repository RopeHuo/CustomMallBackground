/* eslint-disable no-unused-vars */
import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = (app) => ({
	path: '/classifiedManagement',
	title: '分类管理',
	component: dynamicWrapper(app, [], () => import('./components'))
});
export default (app) => createRoute(app, routesConfig);