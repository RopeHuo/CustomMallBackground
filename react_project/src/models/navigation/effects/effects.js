import $request from '@/services/request';
const localUrl = "http://localhost:3000/api/admin-test/tp/";
export default {
	*get_head_list(action, { put }) {		
		const result = yield $request.GET(`${localUrl}`);
		yield put({ "type": "add", "n": result.num })
	}
}