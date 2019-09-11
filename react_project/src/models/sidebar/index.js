import state from './state/serve_state';
import reducers from './reducers/serve_reducers';
import effects from './effects/serve_effects'

export default {
	"namespace": "sidebar", //命名空间
	"state": {
		...state
	},
	"reducers": {
		...reducers
	},
	"effects": {
		...effects
	}
}