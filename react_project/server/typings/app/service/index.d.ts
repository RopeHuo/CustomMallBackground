// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportIndex from '../../../app/service/Index';
import ExportLogin from '../../../app/service/Login';

declare module 'egg' {
  interface IService {
    index: ExportIndex;
    login: ExportLogin;
  }
}
