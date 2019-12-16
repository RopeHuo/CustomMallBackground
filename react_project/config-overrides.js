/* eslint-disable no-undef */
const path = require("path")
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
module.exports = override(
	// 配置antd按需加载
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	}),

	// 配置less的loader
	addLessLoader({
		javascriptEnabled: true,
		// modifyVars: { '@primary-color': '#1DA57A' },
	}),

	// @代表src目录
	addWebpackAlias({
		["@"]: path.resolve(__dirname, "src/"),
	})
);
