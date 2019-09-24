import dva from 'dva';
import logger from 'redux-logger';
import dynamic from 'dva/dynamic';
import createLoading from 'dva-loading';
import config from './config';
import * as serviceWorker from './serviceWorker';

import router from "./routes";

const app = dva({onAction:logger});

// -> 全局异常处理方式
app.use({ onError: config.exception.global });
// -> 获取loading状态
app.use(createLoading());

// -> 加载多个model
// eslint-disable-next-line no-undef
require('./models/index').default.forEach(key => app.model(key.default));

// -> 配置组件加载时默认显示loding
dynamic.setDefaultLoadingComponent(() => config.router.loading);
app.router(router);

app.start("#root");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
