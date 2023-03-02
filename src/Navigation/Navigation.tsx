import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuInfo } from 'rc-menu/lib/interface';
import './Navigation.css';

const menuItems = [
    { key: '/MainPage', label: 'MainPage' },
    { key: '/LikedSong', label: 'LikedSong' },
    
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
        <Layout className="layout">
            <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={selectedKey}
                    items={menuItems}
                    onClick={handleOnClick}
                />
            </Header>
        </Layout>
    );
};

export default Navigation;
