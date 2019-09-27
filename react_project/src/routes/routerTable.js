import Index from '@/pages/index/Index';
import ErrorPage from '@/pages/errorPage/ErrorPage';
import Login from '@/pages/login/Login';

import Home from '@/components/Home/index';
// 基础数据
import ProductManagement from '@/components/BasicData/ProductManagement/index';
import ClassifiedManagement from '@/components/BasicData/ClassifiedManagement/index';
import BrandManagement from '@/components/BasicData/BrandManagement/index';
import SeriesManagement from '@/components/BasicData/SeriesManagement/index';
import SpecificationManagement from '@/components/BasicData/SpecificationManagement/index';
// 进销存管理
import OrderList from '@/components/PurchaseSale/OrderList/index';
import AfterSalesOrder from '@/components/PurchaseSale/AfterSalesOrder/index';
import OrderGoods from '@/components/PurchaseSale/OrderGoods/index';
import ReceivingGoods from '@/components/PurchaseSale/ReceivingGoods/index';

import SystemManagement from '@/components/SystemManagement/WebsiteParameters/index';

import NotFound from '@/components/NotFound/NotFound/index';

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
		indexRoute: '/home',
		component: Index,
		auth:true,
		childRoutes: [
			Home(app),
	
			ProductManagement(app),
			ClassifiedManagement(app),
			BrandManagement(app),
			SeriesManagement(app),
			SpecificationManagement(app),

			OrderList(app),
			AfterSalesOrder(app),
			OrderGoods(app),
			ReceivingGoods(app),

			SystemManagement(app),
			NotFound()
		]
	}
];

export const createRoute =  app => createRoutes(app, routerConfig);

