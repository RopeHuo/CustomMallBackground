/* eslint-disable no-undef */
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
	app.use(
		proxy('/api', {
			target: 'http://127.0.0.1:3001/',
			changeOrigin: true,
			pathRewrite: {
				'^/api': ''
			}
		})
	)
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