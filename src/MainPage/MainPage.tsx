import React, { useEffect, useState } from 'react';
import {  Footer } from 'antd/es/layout/layout';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { State } from '../store';
import './MainPageCss.css';
import PlaylistModal from '../PlaylistModal';
import CardPlaylist from './CardPlaylist';
import CardTop50 from './CardTop50';


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
                        <div><CardPlaylist /></div>
                        <h1 className = {'titleHomePage'}>Top 50</h1>
                        <div> <CardTop50 /></div>
                    </div>
                </div>
            <PlaylistModal />
        </div>
    );
};

export default MainPage;
