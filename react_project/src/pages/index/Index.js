/* eslint-disable no-unused-vars */
import "./style.less";
import React, { Component } from 'react';
import { connect } from 'dva';

import BsicData from '../basicData/BasicData';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Index extends Component {
   constructor(props) {
      super();

      //拉取默认数据
      // props.dispatch({ "type": "sidebar/get_list" });            
   }

   render() {
      const { history } = this.props;//路由跳转使用
      return (
         <div>
            <Layout style={{ height: '100vh' }}>
               <Header className="header">
                  <div className="logo" />
                  <Menu
                     theme="dark"
                     mode="horizontal"
                     defaultSelectedKeys={['2']}
                     style={{ lineHeight: '64px' }}
                  >
                     <Menu.Item key="1"
                        onClick={() => history.push('/basic_data')}
                     >nav 1</Menu.Item>
                  </Menu>
               </Header>
               <Layout>
                  <Sider width={200} style={{ background: '#fff' }}>
                     <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                     >
                        <SubMenu
                           key="sub1"
                           title={<span><Icon type="user" />subnav 1</span>}
                        >
                           <Menu.Item key="1">option2</Menu.Item>
                           <Menu.Item key="2">option2</Menu.Item>
                           <Menu.Item key="3">option3</Menu.Item>
                           <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                     </Menu>
                  </Sider>
                  <Layout style={{ padding: '0 0 0 24px' }}>
                     <Content
                        style={{
                           background: '#fff',
                           padding: 24,
                           margin: 0,
                           minHeight: 280,
                        }}
                     >
                        {this.props.id}
                        <BsicData></BsicData>
                     </Content>
                  </Layout>
               </Layout>
            </Layout>
         </div>
      )
   }
}

export default connect(
   ({ sidebar }) => ({
      id: sidebar.todos.id
   })
)(Index);
