// eslint-disable-next-line no-undef
var R = require("ramda");
// eslint-disable-next-line no-undef
export default {
	//纯函数，不能改变state，只能返回新的state。
	add(state, action) {
		const setTodos = R.set(R.lensProp("todos"), R.__, state);
		return setTodos(R.set(R.lensProp("id"),state.todos.id + action.n,state.todos))
	}
}