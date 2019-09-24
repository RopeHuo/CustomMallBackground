/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Layout, Button, Icon, Input, Checkbox, Spin } from 'antd';
import './index.less';
const { Content } = Layout;
const FormItem = Form.Item;

class Login extends Component {
	handleSubmit = e => {
		const { form, dispatch } = this.props;
		e.preventDefault();
		form.validateFields((err, values) => {
			// 没有error,user和pass不为空||undefined
			if (!err && values.user && values.pass) {
				dispatch({
					type: 'login/async_login',
					payload: values
				});
			}
		});
	};
	render() {
		const isLoading = this.props.loading.effects['user/query']
		const { loading, form } = this.props;
		const { getFieldDecorator } = form;
		return (
			<Layout className="full-layout login-page">
				<Content>
					<Spin tip="登录中..." spinning={!!isLoading}>
						<Form onSubmit={this.handleSubmit} className="login-form">
							<div className="user-img">
								<b>DDM</b>
								<span>Admin</span>
							</div>
							<FormItem>
								{getFieldDecorator('user', {
									rules: [{ required: true, message: '请输入您的用户名' }]
								})(
									<Input
										size="large"
										prefix={<Icon type="user" />}
										placeholder="用户名"
									/>
								)}
							</FormItem>
							<FormItem>
								{getFieldDecorator('pass', {
									rules: [{ required: true, message: '请输入您的密码' }]
								})(
									<Input
										size="large"
										prefix={<Icon type="lock" />}
										type="password"
										placeholder="密码"
									/>
								)}
							</FormItem>
							<FormItem>
								<Button
									size="large"
									type="primary"
									htmlType="submit"
									className="login-form-button"
								>
									登录
                </Button>
							</FormItem>
						</Form>
					</Spin>
				</Content>
			</Layout>
		);
	}
}
const WrappedRegistrationForm = Form.create()(Login);
export default connect(
	({login,loading }) => ({
		loading: loading
	})
)(WrappedRegistrationForm);