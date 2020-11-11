import { EggPlugin } from "egg";

const plugin: EggPlugin = {
	// static: true,
	// nunjucks: {
	//   enable: true,
	//   package: 'egg-view-nunjucks',
	// },
};
// 配置 egg-swagger-doc 插件信息。
plugin.swaggerdoc = {
	enable: true,
	package: "egg-swagger-doc"
};
// 配置跨域插件
plugin.cors = {
	enable: true,
	package: "egg-cors"
};
// plugin.mysql={
//   enable: true,
//   package: 'egg-mysql',
// }
export default plugin;
