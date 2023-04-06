import React from 'react';
import {  Footer } from 'antd/es/layout/layout';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { State } from '../store';
import './MainPageCss.css';
import PlaylistModal from '../PlaylistModal';


const MainPage = () => {
   // const dispatch = useDispatch();
    //const playlist = useSelector((state: State) => state.playlists);
    //const playlistTop = useSelector((state: State) => state.playlistsTop);
    
    

    return (
       
            <div className="app">
                <div className="upper">
                    <div className="body">
                        <h1 className = {'titleHomePage'}>Your playlists</h1>
                        <div> <p>Placeholer Playlise</p></div>
                        <h1 className = {'titleHomePage'}>Top 50</h1>
                        <div> <p>Placeholer Playlise</p></div>
                    </div>
                </div>
            <PlaylistModal />
        </div>
    );
};

export default MainPage;
