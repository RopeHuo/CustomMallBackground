import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";
const path = require('path');
export default (appInfo: EggAppInfo) => {
	const config = {} as PowerPartial<EggAppConfig>;

	// override config from framework / plugin
	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + "_1576483536567_6238";

	// add your egg config in here
	config.middleware = [];
	config.static = {
		prefix:'/public',
		dir:path.join(appInfo.baseDir,'/app/public')
	};
	// 跨域配置
	config.cors = {
		// 表示允许的源
		origin: "*",
		// 表示允许的http请求方式
		allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH"
	};
	// egg-swagger-doc 配置信息
	config.swaggerdoc = {
		dirScanner: "./app/controller",
		apiInfo: {
			title: "Rope后台项目Api文档",
			description: "前端采用React，后端采用Egg",
			version: "1.0.0"
		},
		schemes: ["http", "https"],
		consumes: ["application/json"],
		produces: ["application/json"],
		securityDefinitions: {
			apikey: {
				type: "apiKey",
				name: "clientkey",
				in: "header"
			}
			// oauth2: {
			//   type: 'oauth2',
			//   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
			//   flow: 'password',
			//   scopes: {
			//     'write:access_token': 'write access_token',
			//     'read:access_token': 'read access_token',
			//   },
			// },
		},
		enableSecurity: true,
		// enableValidate: true,
		routerMap: false,
		enable: true
	};

	// add your special config in here
	const bizConfig = {
		sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
	};

	// the return config will combines to EggAppConfig
	return {
		...config,
		...bizConfig
	};
};
