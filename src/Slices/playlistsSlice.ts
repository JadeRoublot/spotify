import { createSlice } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import data from '../static/data.json';

export interface Playlist {
    id : string,
    title: string,
    music : Music[],
    color1 : string,
    color2 : string,
    
}
export interface PlaylistTop extends Playlist {
    year: number;
}

export interface Music {
    title: string,
    artist: string,
    genre: string,
    year: number,
    duration: number,
    popularity: number,
}
const setColorPlaylist = () => {
    let n = (Math.random() * 0xFFFFFF << 0).toString(16);
    return n.padStart( 6 , '0');
}

const setId = () => {
    let r = (Math.random() + 1).toString(36).substring(7);
    return r;
}

const likedSongPlaylist: Playlist = {
    id : '/Playlist/LikedSong',
    title : "Liked Songs",
    music: [],
    color1: "#4000F4",
    color2: "#C0ECD7",
}

const createTop50 = () => {
    const listTop50 = [];
    const musics = data;

    for (let i = 2019; i > 2009; i--) {
        let musicbyYears = musics.filter(musics => musics.year === i)
        
        const top50: PlaylistTop = {
            id : '/Top50/top' + i,
            title: "TOP 50",
            music: musicbyYears,
            color1: setColorPlaylist(),
            color2: setColorPlaylist(),
            year: i
        };

        listTop50.push(top50);
    }

    return listTop50;
}

export const playlistsSlice = createSlice({
    name: 'spotify',
    initialState: {
        playlist: [likedSongPlaylist,],
        playlistTop: createTop50(),
        displayModal: false,
        music : data,
        
    },

    reducers: {
        setPlaylist: (state: {playlist: Playlist[]}, action: { payload: Playlist[] }) => {
            state.playlist = action.payload;
        },

        setDisplayModal: (state: { displayModal: true | false }, action: { payload: true | false }) => {
            state.displayModal = action.payload
        },

        newPlaylist: (state: {playlist: Playlist[]}, action: { payload: string }) => {
            state.playlist.push ({
                id:'/Playlist/' + setId(),
                title : action.payload,
                music : [],
                color1: setColorPlaylist(),
                color2: setColorPlaylist(),
            });
        },

       }

    },
);

export const {setPlaylist, setDisplayModal, newPlaylist} =  playlistsSlice.actions;

export default  playlistsSlice.reducer;