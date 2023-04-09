import { createSlice } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import data from '../static/data.json';

export interface Playlist {
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
let setColorPlaylist = () => (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

const likedSongPlaylist: Playlist = {
    title : "Liked Songs",
    music: [],
    color1: "#4000F4",
    color2: "#C0ECD7"
}

const createTop50 = () => {
    const listTop50 = [];
    const musics = data;

    for (let i = 2010; i < 2020; i++) {
        let musicbyYears = musics.filter(musics => musics.year === i)
        
        const top50: PlaylistTop = {
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
        playlist: [ likedSongPlaylist ,],
        playlistTop: createTop50(),
        displayModal: false,
        music : data,
        
    },

    reducers: {
        setPlaylist: (state: {playlist: Playlist[]}, action: { payload: Playlist[] }) => {
            state.playlist = action.payload;
        },
       
       }

    },
);

export const {setPlaylist} =  playlistsSlice.actions;

export default  playlistsSlice.reducer;