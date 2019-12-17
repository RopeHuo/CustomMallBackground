// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportIndexHome from '../../../app/controller/index/home';

declare module 'egg' {
  interface IController {
    index: {
      home: ExportIndexHome;
    }
  }
}
