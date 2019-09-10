// eslint-disable-next-line no-undef
var R = require("ramda");
export default {
	//纯函数，不能改变state，只能返回新的state。
	add(state) {
		const seta = R.set(R.lensProp("a"), R.__, state);
		return seta(state.s+1);
	}
}