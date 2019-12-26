import { Application } from 'egg';

export default (app: Application) => {
	const { controller, router } = app;
	// 用户登录
	router.post('/v1/login',controller.login.login.index)
	// 首页
  	router.get('/v1/navigation/list', controller.index.home.index);
};
