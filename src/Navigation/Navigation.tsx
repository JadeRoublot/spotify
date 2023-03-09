import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuInfo } from 'rc-menu/lib/interface';
import './Navigation.css';
import Sider from 'antd/es/layout/Sider';
import { HeartFilled, HomeFilled, PlusSquareFilled } from '@ant-design/icons';

const menuItems = [
    { key: '/MainPage', label: 'Home' , icon : <HomeFilled />},
    { key: '/AddPlaylist', label: 'AddPlaylist' , icon : <PlusSquareFilled />},
    { key: '/LikedSong', label: 'LikedSong',icon : <HeartFilled /> },
    
];

const Navigation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedKey, setSelectedKey] = useState<string[]>();
    
    useEffect(() => {
        setSelectedKey([location.pathname]);
    }, [location]);

   

    const handleOnClick = ({ key }: MenuInfo) => {
        navigate(key);
    };

    return (

        <Layout hasSider>
          
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor : 'rgba(0, 0, 0)'
        }}
      >
        <div style={{ height: 32, margin: 20, backgroundImage : `url(/img/spotify logo.png)`}} />
        <img></img>
        <Menu  
        mode="inline" 
        style={{ backgroundColor : 'rgba(0, 0, 0)' , color : 'rgba(255, 255, 255)'}}
        defaultSelectedKeys={selectedKey} 
        items={menuItems} 
        onClick={handleOnClick}/>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 , backgroundColor: 'rgba(18, 18, 18)'}}>
        <Header style={{ padding: 0, backgroundColor: 'rgba(18, 18, 18)'  }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial',  backgroundColor: 'rgba(18, 18, 18)'}}>
       
          </Content>
      </Layout>
    </Layout>
    );
};

export default Navigation;
