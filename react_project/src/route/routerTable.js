// import dynamic from "dva/dynamic";
import Login from '@/pages/login/Login';
import ErrorPage from '@/pages/errorPage/ErrorPage';
import Home from '@/components/Home/Home';
import ProductManagement from '@/components/BasicData/ProductManagement';
import OrderList from '@/components/PurchaseSale/OrderList';
import WebsiteParameters from '@/components/SystemManagement/WebsiteParameters';


export const routerConfig = [
	{
		path: '/',
		component: Home,
		auth: true,
	}, {
		path: '/login',
		component: Login,
	}, {
		path: '/error',
		component: ErrorPage
	},{
		path: '/BasicData',
		component: ProductManagement
	}, {
		path: '/PurchaseSale',
		component: OrderList
	}, {
		path: '/SystemManagement',
		component: WebsiteParameters
	}
];

