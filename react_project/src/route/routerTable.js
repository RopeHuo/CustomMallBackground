import Index from '@/pages/index/Index';
// import ErrorPage from '@/pages/errorPage/ErrorPage';

import Home from '@/components/Home/index';
import BasicData from '@/components/BasicData/ProductManagement/index';
import PurchaseSale from '@/components/PurchaseSale/OrderList/index';
import SystemManagement from '@/components/SystemManagement/WebsiteParameters/index';

import { createRoutes } from '@/utils/core';

export const routerConfig = app => [
	{
		path: '/',
		title: '首页',
		indexRoute: '/home',
		component: Index,
		childRoutes: [
			Home(app),
			BasicData(app),
			PurchaseSale(app),
			SystemManagement(app),
		]
	}
];

export const createRoute =  app => createRoutes(app, routerConfig);

