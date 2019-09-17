import state from './state/state.js';
import reducers from './reducers/reducers.js';
import effects from './effects/effects.js';

export default {
	"namespace": "navigation", //命名空间
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