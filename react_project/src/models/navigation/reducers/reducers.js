// eslint-disable-next-line no-undef
var R = require("ramda");

export default {
	//纯函数，不能改变state，只能返回新的state。
	modify_current_page(state, action) {
		return R.set(R.lensProp("currentPage"), action.n, state)
	},
	head_navigation_list(state,action) {
		return R.set(R.lensProp("headNavigationList"), action.head_navigation_list.data, state)
	}
}