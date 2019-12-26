// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportIndexHome from '../../../app/controller/index/home';
import ExportLoginLogin from '../../../app/controller/login/login';

declare module 'egg' {
  interface IController {
    index: {
      home: ExportIndexHome;
    }
    login: {
      login: ExportLoginLogin;
    }
  }
}
