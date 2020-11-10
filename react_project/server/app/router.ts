import { Application } from 'egg';

export default (app: Application) => {
  	const { controller, router } = app;
		// 首页
  	router.get("/v1/navigation/list", controller.index.home.list);
};
