import { Button, Input, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import './MenuPlaylistCss.css';
import { State } from '../store';
import { Playlist, setDisplayMenu } from '../Slices/playlistsSlice';


const MenuPlaylist = () => {
    const dispatch = useDispatch();
    const playlists: Playlist[] = useSelector((state: State) => state.spotify.playlist);
    const displayMenu  = useSelector((state: State) => state.spotify.displayMenu);
    
    const handleCancel = () => {
        dispatch(setDisplayMenu(false));
    };

    return (
       <div>
            <Modal title="Basic Modal" open={displayMenu} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>

       </div>
    );
};

export default MenuPlaylist;
