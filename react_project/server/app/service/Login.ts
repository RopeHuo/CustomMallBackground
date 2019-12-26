import { Service } from 'egg';

/**
 * Index Service
 */
export default class Login extends Service {

	public async login() {
		// Content-Type:application/json
		// Body:JSON(application/json)
		const body = this.ctx.request.body;
		return {
			username:body.user,
			password:body.pass
		};
	}
}
