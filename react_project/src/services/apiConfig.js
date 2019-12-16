// 定义请求地址
/* eslint-disable no-unused-vars */
let localApi = '';
if (process.env.NODE_ENV === 'development') {
	// 开发环境
	localApi = 'http://127.0.0.1:3001/api';
} else {
	// 生产环境
	localApi = 'http://127.0.0.1:3001/api';
}

export default{
/******************* v1 ******************* */
	V1_NAVIGATION_LIST:'/v1/navigation/list',
	V1_CHARTS_BAR1:'/v1/charts/bar1',
	V1_MENU:'/v1/menu',
}