import dynamic from "dva/dynamic";

const Index = dynamic({
	component: () => import('./pages/index/Index')  //动态引入组件
});
const BasicData = dynamic({
	component: () => import('./pages/basicData/BasicData')
});
const Login = dynamic({
	component: () => import('./pages/login/Login') 
});
const ErrorPage = dynamic({
	component: () => import('./pages/errorPage/ErrorPage')
});

/**
 * 	@param {string} path 		- 路由地址
 *	@param {class} component 	- 渲染组件
 *	@param {boolean} auth 		- 是否鉴权
 */
export const routerConfig = [
	{
		path: '/',
		component: Index,
		auth: true,
	}, {
		path: '/basicdata',
		component: BasicData,
		auth: true,
	}, {
		path: '/login',
		component: Login,
	}, {
		path: '/404',
		component: ErrorPage
	}
];

