export default {
	*addServer(action, { put }) {
		const result = yield fetch("http://127.0.0.1:3001/ceshi").then(data => data.json());
		yield put({ "type": "add", "n": result.b })
	}
}