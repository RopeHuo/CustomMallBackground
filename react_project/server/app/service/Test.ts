import { Service } from 'egg';
import navList from '../../mocks/localData/navList';

/**
 * Test Service
 */
export default class Test extends Service {

  public async sayHi() {
    // 读取数据库资料
    const user = await this.app.mysql.get('app_adv', { id: '6' });
    // console.log(user);
    return navList
  }
}
