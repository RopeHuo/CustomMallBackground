import dva from 'dva';
import logger from 'redux-logger';
import * as serviceWorker from './serviceWorker';

import router from "./router.js";

const app = dva({onAction:logger});

require('./models/index').default.forEach(key => app.model(key.default));
app.router(router);
app.start("#root");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
