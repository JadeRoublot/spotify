import React, { useEffect, useState } from 'react';
import { Layout, Menu, Image } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuInfo } from 'rc-menu/lib/interface';
import './Navigation.css';
import Sider from 'antd/es/layout/Sider';
import { HeartFilled, HomeFilled, PlusSquareFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../store';
import { Playlist, setDisplayModal } from '../Slices/playlistsSlice';




const Navigation = () => {
    
    const dispatch = useDispatch();
    const playlist: Playlist[] = useSelector((state: State) => state.spotify.playlist);
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedKey, setSelectedKey] = useState<string[]>();
    const isModalOpen = useSelector((state: State) => state.spotify.displayModal);
    
    useEffect(() => {
        setSelectedKey([location.pathname]);
    }, [location]);

   const handleMenu = () => {
        const menuItems = [
            { key: '/MainPage', label: 'Home' , icon : <HomeFilled />},
            { key: '/AddPlaylist', label: 'AddPlaylist' , icon : <PlusSquareFilled />},
            { key: '/Playlist/LikedSong', label: 'LikedSong',icon : <HeartFilled /> },
            
        ];
        {playlist.map((playlist) => {
            if(playlist.title !== "Liked Songs") {
                menuItems.push({
                    key: playlist.id,
                    label: playlist.title,
                    icon: <HeartFilled className = {'unwantedIcon'}/> ,
                })
            }})}
        return menuItems;
   }

    const handleOnClick = ({ key }: MenuInfo) => {
        navigate(key);
        if (key === '/AddPlaylist') {
            dispatch(setDisplayModal(true));
        }
    };

    return (

        <Layout hasSider>
          
      <Sider
      >
       <Image src="img/spotify logo.png" preview = {false}/>
       
        
        <Menu  
        mode="inline" 
        defaultSelectedKeys={selectedKey} 
        items={handleMenu()} 
        onClick={handleOnClick}/>
      </Sider>
      
    </Layout>
    
    );
};

export default Navigation;
