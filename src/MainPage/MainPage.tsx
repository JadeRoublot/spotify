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
    const playlist: Playlist[] = useSelector((state: State) => state.spotify.playlists);
    const playlistTop: PlaylistTop[] = useSelector((state: State) => state.spotify.playlistTop);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    //console.log(playlistTop);
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
                                    <p className = {'textCard'}>Card content</p>
                                </Card>

                            </Link>
                        
                            <CardPlaylist />
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
