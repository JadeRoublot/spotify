import React, { useEffect, useState } from 'react';
import { Layout, Menu, Image } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
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
      >
       <Image src="img/spotify logo.png" preview = {false}/>
       
        
        <Menu  
        mode="inline" 
        defaultSelectedKeys={selectedKey} 
        items={menuItems} 
        onClick={handleOnClick}/>
      </Sider>
        <Footer></Footer>
    </Layout>
    
    );
};

export default Navigation;
