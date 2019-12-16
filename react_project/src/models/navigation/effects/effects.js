import $request from '@/services/request';
// 引入配置文件，主要作用读取api接口
import config from '@/config';

export default {
	// eslint-disable-next-line no-unused-vars
	*get_head_list({ action, callback}, { call, put }) {
		const { head_navigation_list } = yield call(() => $request.GET(`${config.apiUrl.GET_V1_NAVIGATION_LIST}`))
		if (head_navigation_list) {
			if (callback && typeof callback === 'function') {
				callback(head_navigation_list.data);
			}
			yield put({ "type": "head_navigation_list", head_navigation_list })
		}
		// const result = yield call(() => $request.GET(config.apiUrl.GET_V1_CHARTS_BAR1))
		// console.log(result,'mock');
	}
}