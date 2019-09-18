/* eslint-disable no-unused-vars */
import "./style.less";
import React, { Component } from 'react';

import { connect } from 'dva';
import { Switch, Link } from 'dva/router';
import { push } from 'react-router-redux';

import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Index extends Component {
   constructor(props) {
      super();
      this.state = {
         collapsed: false,
         brnd: props.title === "Home" ? false : true
      };

      //拉取默认数据
      props.dispatch({ "type": "navigation/get_head_list" });            
   }

   onCollapse = collapsed => {
      this.setState({ collapsed });
   };
   switching_components = e =>{      
      this.props.dispatch({ "type":"navigation/modify_current_page","n":e.key})
      this.props.dispatch(push(e.item.props.path))
   }
   render() {
      const { routerData } = this.props;
      const { childRoutes } = routerData;

      return (
         <div>
            <Header className="header"
               style={{
                  width: '100vw',
                  position: 'fixed',
                  top: 0,
               }}
            >
               <div className="logo">多多美测试版
               <sup style={{fontSize: "12px"}}>2.00dev</sup>
               </div>
               <Menu
                  theme="dark"
                  mode="horizontal" defaultSelectedKeys={[this.props.current_page]}
                  style={{ lineHeight: '64px' }}
               >
                  <Menu.Item>
                     <Link to="/home"><span>后台首页</span></Link>
                  </Menu.Item>
                  <Menu.Item>
                     <Link to="/ProductManagement"><span>基础数据</span></Link>
                  </Menu.Item>
                  <Menu.Item>
                     <Link to="/OrderList"><span>进销存管理</span></Link>
                  </Menu.Item>
                  <Menu.Item>
                     <Link to="/WebsiteParameters"><span>系统管理</span></Link>
                  </Menu.Item>
               </Menu>
            </Header>
            <Layout>
               {
                     this.state.brnd
                     ? 
                     <Sider
                        style={{
                           overflow: 'auto',
                           height: '100vh',
                           position: 'fixed',
                           left: 0,
                           top: 64
                        }}
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                     >
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                           <SubMenu
                              key="sub1"
                              title={
                                 <span>
                                    <Icon type="user" />
                                    <span>User</span>
                                 </span>
                              }
                           >
                              <Menu.Item key="3">Tom</Menu.Item>
                              <Menu.Item key="4">Bill</Menu.Item>
                              <Menu.Item key="5">Alex</Menu.Item>
                           </SubMenu>
                        </Menu>
                     </Sider>
                     :
                     null
               }
               <Layout>
                  <Content style={{ margin: '24px 0 0 16px', overflow: 'initial' }}>
                     <div style={{
                        padding: this.state.collapsed ? "60px 0 0 80px" : "60px 0 0 200px",
                        background: "#fff"
                     }}>
                        <Switch>{childRoutes}</Switch>
                     </div>
                  </Content>
               </Layout>
            </Layout>
         </div>
      )
   }
}

export default connect(
   ({ navigation }) => ({
      current_page: navigation.current_page
   })
)(Index);
