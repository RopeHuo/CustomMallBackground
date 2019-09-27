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
	api:{
		"LOCAL": "http://localhost:3000/api/api",
		"LAN":"http://localhost:3000/lanApi/admin-test/tp/public"
	},

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
	/**
   * 模拟数据时包装反回数据
   * 因为，后端反回数据时一般都会在外边包装一层状态信息
   * 如成功时：
   * {
   *   status: true,
   *   data: responseData
   * }
   * 或出错时：
   * {
   *   status: false,
   *   code: 500,
   *   message: '用户名或密码错误'
   * }
   * 这里就是配置这两个函数，为了我们模拟数据时可以少写几行代码的 orz...
   */
	mock: {
		toSuccess: response => ({
			status: true,
			data: response
		}),

		toError: message => ({
			status: false,
			message: message
		})
	}
}