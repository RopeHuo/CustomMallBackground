import { Controller } from "egg";

/**
 * @Controller Home
 */
export default class HomeController extends Controller {
	/**
	 * @Deprecated
	 * @Summary 导航列表接口
	 * @Description 测试备注信息
	 * @Router GET /v1/navigation/list
	 * @Request query string id eg:200032234567 列表ID
	 * @Request header string access_token eg:ADWSKDKSALKLWE5645465ASDSAD 标识
	 * @Response 200 baseResponse ok
	 */
	public async index() {
		const { ctx } = this;
		ctx.body = await ctx.service.index.navList();
	}
}
