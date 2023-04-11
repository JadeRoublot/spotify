import { Input, Modal, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Header } from 'antd/es/layout/layout';
import Data from '../static/data.json';
import Columns from '../static/columns.json';
import './PlaylistPageCss.css';
import HeaderPlaylist from './Header';
import { useParams } from 'react-router-dom';
import { Playlist, PlaylistTop } from '../Slices/playlistsSlice';
import { useSelector } from 'react-redux';
import { State } from '../store';

const PlaylistPage = () => {
    const param = useParams();
    const data = Data;
    const columns = Columns;

    const playlists: Playlist[] = useSelector((state: State) => state.spotify.playlist);
    const playlistsTop: PlaylistTop[] = useSelector((state: State) => state.spotify.playlistTop);
    
    

    const handlePlaylistselect = () : Playlist | PlaylistTop => {

        let playlist:Playlist | undefined = playlists.find((playlist:Playlist) => playlist.id === '/Playlist/' + param.id);
        let playlistTop:PlaylistTop | undefined = playlistsTop.find((playlistTop:PlaylistTop) => playlistTop.id === '/Top50/' + param.year);
        if (playlist === undefined) {
            
            if (playlistTop !== undefined) {
                return playlistTop;
            }

        } else {
            return playlist;
        }
        throw new Error('Neither playlist nor playlistTop exists');
    }
    let playlistSelect = handlePlaylistselect();
    console.log(handlePlaylistselect());

    return (
      
           <div className="app">
              <HeaderPlaylist other = {playlistSelect}/>
                <div className="upper">
                    <div className="body">
                        <Table dataSource={playlistSelect.music} columns={columns} />
                    </div>
                 </div>
            </div>
      
    );
};

export default PlaylistPage;
