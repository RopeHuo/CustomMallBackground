// eslint-disable-next-line no-undef
var R = require("ramda");
// eslint-disable-next-line no-undef
export default {
	//纯函数，不能改变state，只能返回新的state。
	modify_current_page(state, action) {
		return R.set(R.lensProp("current_page"), action.n, state)
	}
}