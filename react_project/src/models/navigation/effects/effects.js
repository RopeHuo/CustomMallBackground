import $request from '@/services/request';
import config from '@/config';
// import $$ from 'cmn-utils'
export default {
	// eslint-disable-next-line no-unused-vars
	*get_head_list({ action, callback}, { call, put }) {		
		const { head_navigation_list } = yield call(() => $request.GET(`${config.api.LOCAL}`))
		if (head_navigation_list) {
			if (callback && typeof callback === 'function') {
				callback(head_navigation_list.data);
			}
			yield put({ "type": "head_navigation_list", head_navigation_list })
		}
		// const result = yield $$.post('/user/menu');
		// console.log(result);
	}
}