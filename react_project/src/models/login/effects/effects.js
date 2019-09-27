import $request from '@/services/request';
import config from '@/config'
// var a = "1115c49e61749cfb3008ae6a3ba24cb7";
export default {
	*async_login(action, { put }) {		
		const result = yield $request.POST(`${config.api.LAN}/menu`, {
			'title':"ziding",
			'route':"/a/b"
		});
	}
}