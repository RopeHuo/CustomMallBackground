import { Service } from 'egg';
import navList from '../../mocks/localData/navList';

/**
 * Index Service
 */
export default class Index extends Service {

	public async navList() {
		// 增加数据
		// await this.app.mysql.insert('app_adv', {		
		// 	id: 123,
		// 	position_id: 1234,
		// 	name: '自定义',
		// 	link: 'http://meizi.manogue.com.cn/wap/goods/info?id=557',
		// 	img:'http://meizi.oss.manogue.com.cn/b35ef574b2d7ad1b/d2cddadcbaaf9f40.jpg',
		// 	is_show: 1,
		// 	sort: 0,
		// 	show_district: 0,
		// 	status: 1,
		// 	create_time: "2019-10-26T01:53:42.000Z"
		// });

		// 删除数据
		// await this.app.mysql.delete('app_adv', { id: '123' });

		// 修改数据，将会根据主键 ID 查找，并更新
		// 如果主键是自定义的 ID 名称，如 custom_id，则需要在 `where` 里面配置,在第三个对象参数的属性为对象中配置
		await this.app.mysql.update('app_adv', {
			id: 123,
			name: 'fengmk2123',
		});
		
		// 读取数据库资料
		await this.app.mysql.get('app_adv', { id: '123' });
		return navList
  }
}
