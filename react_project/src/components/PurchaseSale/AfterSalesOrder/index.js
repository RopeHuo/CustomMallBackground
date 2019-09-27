import { dynamicWrapper, createRoute } from '@/utils/core';
const routesConfig = (app) => ({
	path: '/afterSalesOrder',
	title: '售后订单',
	auth:true,
	component: dynamicWrapper(app, [], () => import('./components'))
});
export default (app) => createRoute(app, routesConfig);
