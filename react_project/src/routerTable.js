import dynamic from "dva/dynamic";

/**
 * 	@param {string} path 		- 路由地址
 *	@param {class} component 	- 渲染组件,使用dynamic动态引入
 *	@param {boolean} auth 		- 是否鉴权
 */
export const routerConfig = [
	{
		path: '/',
		component: dynamic({
			component: () => import('./pages/index/Index')
		}),
		auth: true,
	}, {
		path: '/basicdata',
		component: dynamic({
			component: () => import('./pages/basicData/BasicData')
		}),
		auth: true,
	}, {
		path: '/login',
		component: dynamic({
			component: () => import('./pages/login/Login')
		}),
	}, {
		path: '/404',
		component: dynamic({
			component: () => import('./pages/errorPage/ErrorPage')
		})
	}
];

