import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'dva';

import "./app.less";

class App extends Component {
	render() {
		return (
			<div>
				<p className="yanse">我是文字</p>
			</div>
		)
	}
}

export default connect(
	({ serve }) => ({
		a: serve.a
	})
)(App);
