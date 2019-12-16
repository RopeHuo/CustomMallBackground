/* eslint-disable no-undef */
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
	// 接口代理本地
	app.use(
		proxy('/api', {
			target: 'http://127.0.0.1:3001/',
			changeOrigin: true,
			pathRewrite: {
				'^/api': ''
			}
		})
	)
	// 接口代理局域网
	app.use(
		proxy('/lanApi', {
			target: 'http://192.168.2.129/',
			changeOrigin: true,
			pathRewrite: {
				'^/lanApi': ''
			}
		})
	)
}