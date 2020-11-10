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
// plugin.mysql={
//   enable: true,
//   package: 'egg-mysql',
// }
export default plugin;
