import { Button, Input, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import './MenuPlaylistCss.css';
import { State } from '../store';
import { Music, Playlist, setDisplayMenu } from '../Slices/playlistsSlice';


const MenuPlaylist = () => {
    const dispatch = useDispatch();
    const playlists: Playlist[] = useSelector((state: State) => state.spotify.playlist);
    const displayMenu  = useSelector((state: State) => state.spotify.displayMenu);
    
    const handleCancel = () => {
        dispatch(setDisplayMenu(false));
    };

    return (
       <div>
            <Modal title="Add to playlist" 
            open={displayMenu} 
            onCancel={handleCancel}
            footer={[
         
              ]}>

                {playlists.map((playlist) => {
                    if(playlist.title !== "Liked Songs") {
                        return <h1> {playlist.title}</h1>;
                    } else {
                        return null;
                }})}
            </Modal>

       </div>
    );
};

export default MenuPlaylist;
