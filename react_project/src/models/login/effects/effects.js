import $request from '@/services/request';
import config from '@/config'
export default {
	*async_login(action, { put }) {		
		const result = yield $request.POST(`${config.api.LAN}/login`, action.payload);
		console.log(result.data);
		
	}
}