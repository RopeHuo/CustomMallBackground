/* eslint-disable no-unused-vars */
import React from 'react';
import PageLoading from "@/components/Loading/PageLoading";

export default {
	// -> HTML的title模板
	htmlTitle: 'DDMAdmin - {title}',

	// -> 路由加载显示的loding组件
	router: {
		loading: <PageLoading loading />
	},

	// -> 配置请求地址
	api:"http://localhost:3000/api",

	// -> 全局异常处理
	exception: {
		global: (err, dispatch) => {
			const errName = err.name;
			// RequestError为拦截请求异常
			if (errName === 'RequestError') {
				console.error("message"+err.message);
				console.error(err);
			} else {
				console.error(err);
			}
		},
	},
}