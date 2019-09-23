import $request from '@/services/request';
import config from '@/config'
export default {
	*addServer(action, { put }) {		
		const result = yield $request.GET(`${config.api}`);				
		yield put({ "type": "add", "n": result.num })
	}
}