import $request from '@/services/request';
import config from '@/config'
export default {
	*get_head_list(action, { put }) {		
		const { head_navigation_list } = yield $request.GET(`${config.api.LOCAL}`);		
		yield put({ "type": "head_navigation_list", head_navigation_list})
	}
}