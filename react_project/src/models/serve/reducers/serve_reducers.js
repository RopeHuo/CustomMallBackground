export default {
	//纯函数，不能改变state，只能返回新的state。
	add(state, action) {
		return {
			"a": state.a + action.n
		}
	}
}