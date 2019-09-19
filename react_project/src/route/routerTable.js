import Index from '@/pages/index/Index';
import ErrorPage from '@/pages/errorPage/ErrorPage';
import Login from '@/pages/login/Login';

import Home from '@/components/Home/index';
import BasicData from '@/components/BasicData/ProductManagement/index';
import PurchaseSale from '@/components/PurchaseSale/OrderList/index';
import SystemManagement from '@/components/SystemManagement/WebsiteParameters/index';

import { createRoutes } from '@/utils/core';

export const routerConfig = app => [
	{
		path: '/error',
		title: '错误',
		indexRoute: '/error/404',
		component: ErrorPage
	},
	{
		path: '/login',
		title: '登录',
		indexRoute: '/login/sign',
		component: Login
	},
	{
		path: '/',
		title: '首页',
		indexRoute: '/Home',
		component: Index,
		auth:true,
		childRoutes: [
			Home(app),
			BasicData(app),
			PurchaseSale(app),
			SystemManagement(app),
		]
	}
];

export const createRoute =  app => createRoutes(app, routerConfig);

