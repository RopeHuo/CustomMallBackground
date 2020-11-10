import { Controller } from "egg";

/**
 * @Controller Home
 */
export default class HomeController extends Controller {
	/**
	 * @Summary 新增导航
	 * @Router POST /v1/navigation/create
	 * @Request body v1NavigationCreateReq *body
	 * @Response 200 v1NavigationCreateRes 创建成功
	 */
	public async create() {}
	// * @Deprecated
	/**
	 * @Summary 导航列表
	 * @Description 测试备注信息
	 * @Router GET /v1/navigation/{id}/list
	 * @Request path integer *id eg:200032234567 列表ID
	 * @Request header string access_token eg:ADWSKDKSALKLWE5645465ASDSAD 标识
	 * @Response 200 v1NavigationIndexRes 默认返回结果
	 */
	public async index() {
		const { ctx } = this;
		ctx.body = await ctx.service.index.navList();
	}
	/**
	 * @summary 创建用户
	 * @description 创建用户，记录用户账户/密码/类型
	 * @router post /v1/navigation/add
	 * @request body v1NavigationAddReq *body
	 * @response 200 baseResponse 创建成功
	 */
	async add() {}

	/**
	 * @summary 获取用户
	 * @description 分页获取用户信息
	 * @router get /v1/navigation/query
	 * @request query integer pageNo 页码 默认 1
	 * @request query integer pageSize 单页数量 默认 20
	 * @response 200 v1NavigationQueryRes successed
	 */
	async query() {}

	/**
	 * @summary 获取用户
	 * @description 获取用户信息
	 * @router get /v1/navigation/get/{id}
	 * @request path string *id
	 * @response 200 v1NavigationGetRes 用户信息
	 */
	async get() {}

	/**
	 * @summary 删除用户
	 * @description 删除用户信息
	 * @router delete /v1/navigation/delete/{id}
	 * @request path string *id
	 * @response 200 baseResponse 删除成功
	 */
	async delete() {}

	/**
	 * @summary 更新用户
	 * @description 创建用户，记录用户账户/密码/类型
	 * @router put /v1/navigation/update/{id}
	 * @request path string *id
	 * @request body v1NavigationUpdateReq *body
	 * @response 200 user 更新成功
	 */
	async update() {}

	/**
	 * @summary 上传图片
	 * @description 上传图片
	 * @router post /v1/navigation/upload
	 * @request formData string id 用户ID
	 * @request formData file *file
	 * @response 200 v1NavigationUploadRes 更新成功
	 */
	async upload() {}
}
