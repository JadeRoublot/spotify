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

import {PlaylistTop, Playlist} from "../Slices/playlistsSlice";


const MainPage = () => {
    const dispatch = useDispatch();
    const playlist: Playlist[] = useSelector((state: State) => state.spotify.playlist);
    const playlistTop: PlaylistTop[] = useSelector((state: State) => state.spotify.playlistTop);

    
    //console.log(playlist);
    return (
       
            <div className="app">
                <div className="upper">
                    <div className="body">
                        <h1 className = {'titleHomePage'}>Your playlists</h1>
                        <div className={'yourPlaylists'}>
                            <Link  key={`/Playlist/LikedSong`} to={`/Playlist/LikedSong`} className={'Link'}>
                                
                                <Card className={'CardPlaylist'} bordered={false} >
                                    <Card className={'CardPlaylistCover'} bordered={false} style={{background: "linear-gradient(135deg, #4000F4 0%, #603AED 22.48%, #7C6EE6 46.93%, #979FE1 65.71%, #A2B3DE 77.68%, #ADC8DC 88.93%, #C0ECD7 100%)"}}>
                                        <HeartFilled className={'HeartIconCover'}/>
                                    </Card>
                                    <p className = {'textCard'}>Liked Songs</p>
                                </Card>

                            </Link>
                            {playlist.map((playlist) => {
                                if(playlist.title !== "Liked Songs") {
                                    return <CardPlaylist id={playlist.id} title={playlist.title} music={playlist.music} color1={playlist.color1} color2={playlist.color2}/>;
                                } else {
                                return null;
                            }})}
                           
                            
                        </div>
                        <h1 className = {'titleHomePage'}>Top 50</h1>
                         <div className={'yourPlaylists'}> 

                            {playlistTop.map((playlist) => {
                                return <CardTop50 id  = {playlist.id } title={playlist.title} music={playlist.music} color1={playlist.color1} color2={playlist.color2} year={playlist.year}/>;
                            })}
                           
                        </div> 
                    </div>
                </div>
            <PlaylistModal />
        </div>
    );
};

export default MainPage;
