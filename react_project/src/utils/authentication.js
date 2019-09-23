/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Redirect } from 'dva/router';

export const FrontendAuth = (routeProps) => {	
	//写测试token方便开发
	localStorage.setItem('token', "asd");
	//如果token存在就判断正确;
	const isLogin = localStorage.getItem('token');

	//这个路由存在，且不用权限，且没有登录
	if (routeProps && !routeProps.auth && !isLogin) {
		return <Route {...routeProps} />
	}
	if (isLogin) {
		// 如果是登陆状态，想要跳转到登陆，重定向到主页
		if (routeProps.path === '/login/sign') {
			return <Redirect to="/home" />
		} else {
			// 如果路由合法，就跳转到相应的路由
			if (routeProps.path) {				
				return <Route {...routeProps} />
			} else {
				// 如果路由不合法，重定向到 error 页面
				return <Route {...routeProps} />
			}
		}
	} else {
		// 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
		if (routeProps && routeProps.auth) {
			return <Redirect to="/login" />
		} else {
			// 非登陆状态下，路由不合法时，重定向至 error
			return <Route {...routeProps} />
		}
	}
}