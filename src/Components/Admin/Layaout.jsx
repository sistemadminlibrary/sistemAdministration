import React, {useContext} from 'react'

import '../../Css/layaoutstyle.css';
import HeaderAdmin from './HeaderAdmin';
import logo from '../../Img/asset/logo.png';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  HomeFilled,
  PoweroffOutlined,
  BookTwoTone,
  UserAddOutlined,
  FileAddFilled
} from '@ant-design/icons';


import { Link, useHistory } from 'react-router-dom';
import { CRMAuthContext } from '../../Context/AuthProvider';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;


const Layaout = ({children}) => {

  let history = useHistory();
  const { setAuth } = useContext(CRMAuthContext);

  const sessionClose = () =>{
    history.replace("/admin/login");
    setAuth({ auth: false, token:'', user:'' });
    localStorage.removeItem("token");
  }

  return (
    
      <Layout style={{ height: "100vh" }}>
        <Sider 
        collapsedWidth="0"
        breakpoint="md"
        >
           
          <div className="logo">
            <img src={logo} alt="" width="105" height="110"/>
            </div>
          <Menu theme="dark" mode="inline" style={{ position:'relative', top:'1.3em' }} >
          <Menu.Item className="hover-back"  key="1" icon={<HomeFilled />}>
            <Link to="/sistemAdministration" style={{color: "white"}}>
              Inicio
            </Link>
          </Menu.Item>
          
          <SubMenu key="sub2" icon={<UserOutlined />} title="Administrar">
            <Menu.Item key="3" icon={<BookTwoTone/>}>
              <Link to="/admin/add/books">
                Nuevo Libro
              </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UserAddOutlined />} >
         <Link to="/admin/register">
                Nuevo Administrador
         </Link>
              </Menu.Item>
            <Menu.Item key="5" icon={<FileAddFilled />} >
              <Link to="/admin/report">
                Crear Reporte
              </Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item onClick={sessionClose} icon={<PoweroffOutlined/>}>
            Cerrar Sesion
          </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
          <HeaderAdmin/>
          </Header>
          <Content
            className="site-layout-background main-admin"
            style={{
              margin: '64px 16px',
              padding: 24,
              maxHeight: '100vh',
            }}
          >
           {children}
          </Content>
        </Layout>
      </Layout>
    
  )
}

export default Layaout
/**
 *  
 */