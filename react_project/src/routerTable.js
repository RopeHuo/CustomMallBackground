// import dynamic from "dva/dynamic";
import Index from './pages/index/Index';
import Login from './pages/login/Login';
import ErrorPage from './pages/errorPage/ErrorPage';
import Home from './components/Home/Home';
import ProductManagement from './components/BasicData/ProductManagement';
import OrderList from './components/PurchaseSale/OrderList';
import WebsiteParameters from './components/SystemManagement/WebsiteParameters';


export const routerConfig = [
	{
		path: '/',
		component: Index,
		auth: true,
	}, {
		path: '/login',
		component: Login,
	}, {
		path: '/error',
		component: ErrorPage
	}, {
		path: '/Home',
		component: Home
	}, {
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

