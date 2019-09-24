// eslint-disable-next-line no-undef
var R = require("ramda");

export default {
	//纯函数，不能改变state，只能返回新的state。
	head_navigation_list(state,action) {
		return R.set(R.lensProp("head_navigation_list"), action.head_navigation_list.data, state)
	}
}