import $request from '@/services/request';
const localUrl = "http://127.0.0.1:3001";
export default {
	*addServer(action, { put }) {		
		const result = yield $request.GET(`${localUrl}/api`);				
		yield put({ "type": "add", "n": result.num })
	}
}