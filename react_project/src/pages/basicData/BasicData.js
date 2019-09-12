/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'dva';

class BasicData extends Component {
	render() {
		return (
			<div>
				<h1>basic data页面</h1>
				<button onClick={() => { this.props.dispatch({ "type":"sidebar/addServer"})}}>点击触发请求服务器请求</button>
			</div>
		)
	}
}
export default connect(
)(BasicData);
