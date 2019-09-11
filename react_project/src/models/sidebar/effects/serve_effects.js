import $request from '@/services/request'
console.log($request);

export default {
	*addServer(action, { put }) {
		const result = yield $request("http://127.0.0.1:3001/ceshi").then(data => data);
		yield put({ "type": "add", "n": result.b })
	}
}