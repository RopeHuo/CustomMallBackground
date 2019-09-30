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
         openKeys: []
      };

      //拉取默认数据
      props.dispatch({ "type": "navigation/get_head_list", callback:(key)=>{
         this.setOpenKeys(key)
      } });
   }
   //可以根据直接访问路由设置openKeys自动打开下拉
   setOpenKeys = (key)=>{
      let selectedKeys = this.childerIsExist(key, this.props.location.pathname);
      let sort = []
      if (selectedKeys) {
         if (selectedKeys.sort) {
            sort.push(selectedKeys.sort)
            this.setState({
               openKeys: sort
            })
         }
      }
   }
   onOpenChange = openKeys =>{
      this.setState({openKeys})
   }
   
   onCollapse = collapsed => {
      this.setState({ collapsed });
   };

   routerJump = (path,head) =>{
      this.props.dispatch(push(path))
      if(head === "head"){//如果是header导航点击就固定切换为1
         this.setState({
            openKeys: ["1"]
         })
      }
      //请求侧边栏数据
      this.sideEdgeNavigation(path)
   };
   //查找childer路由是否存在该项
   childerIsExist = (sidebarObj,path) =>{
      for (let i = 0; i < sidebarObj.length; i++) {
         if (sidebarObj[i].childer) {
            for (let k = 0; k < sidebarObj[i].childer.length; k++) {
               for (let r = 0; r < sidebarObj[i].childer[k].childer.length; r++) {
                  if (sidebarObj[i].childer[k].childer[r].router === path) {
                     return {
                        item:sidebarObj[i],
                        sort: sidebarObj[i].childer[k].sort
                     }
                  }
               }
            }
         }
      }
   }

   headNavigation = () => {
      let domArr = [];
      let headNavigationArr = this.props.headNavigationList;
      for (let i = 0; i < headNavigationArr.length; i++) {
         domArr.push(
            <Menu.Item
               key={headNavigationArr[i].router}
               onClick={() => { this.routerJump(headNavigationArr[i].router,"head") }}
            >
               <span>{headNavigationArr[i].title}</span>
            </Menu.Item>)
      }
      return domArr
   };

   sideEdgeNavigation = (path) => {
      let domArr = [];
      const sidebarObj = this.props.headNavigationList
      //是否是首页，并且找到返回数据中的这条路由
      const result = sidebarObj.filter(item => item.router === path && path !== "/home")[0];
      //如果在一级目录就找到就直接返回，没有找到再去子目录查找
      let sideEdgeNavigationItem = null;
      if (result){sideEdgeNavigationItem = result}else{
         let obj = this.childerIsExist(sidebarObj, path);
         sideEdgeNavigationItem = obj ? obj.item : null;
      }
      if (sideEdgeNavigationItem){         
         for (let i = 0; i < sideEdgeNavigationItem.childer.length; i++) {
            //判断是否有下拉框
            sideEdgeNavigationItem.childer[i].title 
            ? domArr.push(
               <SubMenu
                  key={sideEdgeNavigationItem.childer[i].sort}
                  title={
                     <span>
                        <Icon type="user" />
                        <span>{sideEdgeNavigationItem.childer[i].title}</span>
                     </span>
                  }
               >
                  {
                     sideEdgeNavigationItem.childer[i].childer.map(item => {
                        return <Menu.Item 
                        key={item.router}
                        onClick={() => { this.routerJump(item.router) }}
                        >{item.title}</Menu.Item>
                     })
                  }
               </SubMenu>)
            : domArr.push(
                     sideEdgeNavigationItem.childer[i].childer.map(item => {
                        return <Menu.Item 
                        key={item.router}
                        onClick={() => { this.routerJump(item.router) }}
                        >{item.title}</Menu.Item>
                     })
               )

         }
         return domArr;
      }
      return null;
   }
   
   render() {
      const { routerData } = this.props;
      const { childRoutes } = routerData;
      const pathName = this.props.location.pathname;
      // 这里是为了方便得到切换左侧栏时header标签栏选中情况
      let selectedKeys = this.childerIsExist(this.props.headNavigationList, pathName);
      let router = null;//侧边栏选择不会影响header栏
      if (selectedKeys) { if (selectedKeys.item.router) router = selectedKeys.item.router}
      
      
      return (
         <div>
            {
               // eslint-disable-next-line no-prototype-builtins
               window.dva_router_pathMap.hasOwnProperty(pathName) ?
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
                           selectedKeys={[router]}
                           style={{ lineHeight: '64px' }}
                        >
                           {this.headNavigation()}
                        </Menu>
                     </Header>
                     <Layout>
                        {
                           pathName !== "/home"
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
                                 <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathName]}
                                    selectedKeys={[pathName]}
                                    openKeys={this.state.openKeys}
                                    onOpenChange={this.onOpenChange}
                                 >
                                    {this.sideEdgeNavigation(pathName)}
                                 </Menu>
                              </Sider>
                              :
                              null
                        }
                        <Layout>
                           <Content style={{ paddingTop: '24px', overflow: 'initial' }}>
                              <div style={{
                                 padding: pathName === "/home" ? "60px 0 0 96px" : "60px 0 0 216px",
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
      headNavigationList: navigation.headNavigationList
   })
)(Index);
