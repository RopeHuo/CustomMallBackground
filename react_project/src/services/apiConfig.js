// 定义请求地址
/* eslint-disable no-unused-vars */
let localApi = '';
if (process.env.NODE_ENV === 'development') {
	// 开发环境
	localApi = 'http://localhost:3000/api';
} else {
	// 生产环境
	localApi = 'http://localhost:3000/api';
}

export default{
/******************* v1 ******************* */
	GET_V1_NAVIGATION_LIST: 	localApi + '/v1/navigation/list',
	GET_V1_CHARTS_BAR1: 		localApi + '/v1/charts/bar1',
	GET_V1_MENU: 				localApi + '/v1/menu',
}