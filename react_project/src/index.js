import dva from 'dva';
import logger from 'redux-logger';
import dynamic from 'dva/dynamic';
import createLoading from 'dva-loading';
// 全局配置文件
import config from './config';
// 网站离线
import * as serviceWorker from './serviceWorker';
// 路由
import router from "./routes";
// logger插件
const app = dva({onAction:logger});

// 全局异常处理方式
app.use({ onError: config.exception.global });
// 获取loading状态
app.use(createLoading());

// 如果是开发环境使用mock数据
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'development') {
// eslint-disable-next-line no-undef
  require('./mocks');
}

// 加载多个model
// eslint-disable-next-line no-undef
require('./models/index').default.forEach(key => app.model(key.default));

// 配置组件加载时默认显示loding
dynamic.setDefaultLoadingComponent(() => config.router.loading);
// 注册路由
app.router(router);
// 挂在节点
app.start("#root");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
