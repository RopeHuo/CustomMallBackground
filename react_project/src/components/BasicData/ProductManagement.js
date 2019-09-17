/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

import Index from '@/pages/index/Index';
export default class ProductManagement extends Component {
	constructor(props) {
		super();
	}

	render() {
		return (
			<Index>
				<div title="ProductManagement">
					<h1>ProductManagement页面</h1>
				</div>
			</Index>

		)
	}
}
