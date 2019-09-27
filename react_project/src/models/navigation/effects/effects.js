import $request from '@/services/request';
import config from '@/config';
// import $$ from 'cmn-utils'
export default {
	*get_head_list(action, { call, put }) {		
		const { head_navigation_list } = yield call(() => $request.GET(`${config.api.LOCAL}`))
		yield put({ "type": "head_navigation_list", head_navigation_list})
		// const result = yield $$.post('/user/menu');
		// console.log(result);
	}
}