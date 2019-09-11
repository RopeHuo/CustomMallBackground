/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'dva';

class BasicData extends Component {
	render() {
		return (
			<div>
				<h1>basic data页面</h1>
			</div>
		)
	}
}
export default connect(
)(BasicData);
