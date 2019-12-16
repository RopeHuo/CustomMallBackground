import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/v1/navigation/list', controller.home.index);
};
