import $request from '@/services/request';
const localUrl = "http://localhost:3000/api";
export default {
	*get_head_list(action, { put }) {		
		const result = yield $request.GET(`${localUrl}/v2/movie/in_theaters`);				
		// yield put({ "type": "add", "n": result.num })
		console.log(result);
		
	}
}