/* eslint-disable no-unused-vars */
import "./style.less";
import React, { Component } from 'react';

import { connect } from 'dva';
import { Switch } from 'dva/router';
import { push } from 'react-router-redux';

import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Index extends Component {
   constructor(props) {
      super();
      this.state = {
         collapsed: false,
      
      };

      //拉取默认数据
      props.dispatch({ "type": "navigation/get_head_list" });
   }

   onCollapse = collapsed => {
      this.setState({ collapsed });
   };

   router_jump = path =>{
      this.props.dispatch(push(path))    
      //请求侧边栏数据
      this.side_edge_navigation(path)
   };

   head_navigation = () => {
      let dom_arr = [];
      let head_navigation_arr = this.props.head_navigation_list;
      for (let i = 0; i < head_navigation_arr.length; i++) {
         dom_arr.push(
            <Menu.Item
               key={head_navigation_arr[i].router}
               onClick={() => { this.router_jump(head_navigation_arr[i].router) }}
            >
               <span>{head_navigation_arr[i].title}</span>
            </Menu.Item>)
      }
      return dom_arr
   };

   side_edge_navigation = (path) => {
      let dom_arr = [];
      //是否是首页，并且找到返回数据中的这条路由
      let side_edge_navigation_item = this.props.head_navigation_list
      .filter(item => item.router === path && path !== "/home" )[0];
      
      if (side_edge_navigation_item){         
         for (let i = 0; i < side_edge_navigation_item.childer.length; i++) {
            //判断是否有下拉框
            side_edge_navigation_item.childer[i].title 
            ? dom_arr.push(
               <SubMenu
                  key={side_edge_navigation_item.childer[i].sort}
                  title={
                     <span>
                        <Icon type="user" />
                        <span>{side_edge_navigation_item.childer[i].title}</span>
                     </span>
                  }
               >
                  {
                     side_edge_navigation_item.childer[i].childer.map(item => {
                        return <Menu.Item key={item.id}>{item.title}</Menu.Item>
                     })
                  }
               </SubMenu>)
            : dom_arr.push(
                     side_edge_navigation_item.childer[i].childer.map(item => {
                        return <Menu.Item key={item.id}>{item.title}</Menu.Item>
                     })
               )

         }
         return dom_arr;
      }
      return null;
   }
   
   render() {
      const { routerData } = this.props;
      const { childRoutes } = routerData;
      const path_name = this.props.location.pathname;
      return (
         <div>
            {
               // eslint-disable-next-line no-prototype-builtins
               window.dva_router_pathMap.hasOwnProperty(path_name) ?
                  <div>
                     <Header className="header"
                        style={{
                           width: '100vw',
                           position: 'fixed',
                           top: 0,
                        }}
                     >
                        <div className="logo">多多美测试版
                     <sup style={{ fontSize: "12px" }}>2.00dev</sup>
                        </div>
                        <Menu
                           theme="dark"
                           mode="horizontal" 
                           selectedKeys={[path_name]}
                           style={{ lineHeight: '64px' }}
                        >
                           {this.head_navigation()}
                        </Menu>
                     </Header>
                     <Layout>
                        {
                           path_name !== "/home"
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
                                    {this.side_edge_navigation(path_name)}
                                 </Menu>
                              </Sider>
                              :
                              null
                        }
                        <Layout>
                           <Content style={{ paddingTop: '24px', overflow: 'initial' }}>
                              <div style={{
                                 padding: path_name === "/home" ? "60px 0 0 96px" : "60px 0 0 216px",
                                 background: "#fff"
                              }}>
                                 <Switch>{childRoutes}</Switch>
                              </div>
                           </Content>
                        </Layout>
                     </Layout>
                  </div>
                  : <h1>没有找到页面</h1>
            }
         </div>
      )
   }
}

export default connect(
   ({ navigation }) => ({
      current_page: navigation.current_page,
      head_navigation_list: navigation.head_navigation_list
   })
)(Index);
