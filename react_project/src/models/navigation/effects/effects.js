import $request from '@/services/request';
const localUrl = "http://127.0.0.1:3000/api";
export default {
	*get_head_list(action, { put }) {		
		const { head_navigation_list} = yield $request.GET(`${localUrl}`);		
		yield put({ "type": "head_navigation_list", head_navigation_list})
	}
}