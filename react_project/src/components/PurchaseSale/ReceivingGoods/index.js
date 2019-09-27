import { dynamicWrapper, createRoute } from '@/utils/core';
const routesConfig = (app) => ({
	path: '/receivingGoods',
	title: '收货',
	auth:true,
	component: dynamicWrapper(app, [], () => import('./components'))
});
export default (app) => createRoute(app, routesConfig);
