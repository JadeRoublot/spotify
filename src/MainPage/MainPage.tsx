import React, { useEffect, useState } from 'react';
import {  Footer } from 'antd/es/layout/layout';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { State } from '../store';
import './MainPageCss.css';
import PlaylistModal from '../PlaylistModal';
import CardPlaylist from './CardPlaylist';
import CardTop50 from './CardTop50';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { HeartFilled } from '@ant-design/icons';


const MainPage = () => {
   // const dispatch = useDispatch();
    //const playlist = useSelector((state: State) => state.playlists);
    //const playlistTop = useSelector((state: State) => state.playlistsTop);
    const [isModalOpen, setIsModalOpen] = useState(false);
    

    return (
       
            <div className="app">
                <div className="upper">
                    <div className="body">
                        <h1 className = {'titleHomePage'}>Your playlists</h1>
                        <div className={'yourPlaylists'}>
                            <Link to={`/LikedSong`} className={'Link'}>
                                
                                <Card className={'CardPlaylist'} bordered={false}>
                                    <Card className={'CardPlaylistCover'}>
                                        <HeartFilled />
                                    </Card>
                                    <p>Card content</p>
                                </Card>

                            </Link>
                        
                            <CardPlaylist />
                        </div>
                        <h1 className = {'titleHomePage'}>Top 50</h1>
                        <div> <CardTop50 /></div>
                    </div>
                </div>
            <PlaylistModal />
        </div>
    );
};

export default MainPage;
