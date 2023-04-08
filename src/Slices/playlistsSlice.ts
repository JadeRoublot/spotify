import { createSlice } from '@reduxjs/toolkit';
import React, { useState } from 'react';


export interface Playlist {
    title: string
    music : Music[]
    color1 : string
    color2 : string
}

export interface Music {
    title: string
    artist: string
    genre: string
    year: number
    duration: number
    popularity: number
}

const likedSongPlaylist: Playlist = {
    title : "Liked Songs",
    music: [],
    color1: "#4000F4",
    color2: "#C0ECD7"
}

export const playlistsSlice = createSlice({
    name: 'playlist',
    initialState: {
      
       
        
    },

    reducers: {

       
       }

    },
);

export const {} =  playlistsSlice.actions;

export default  playlistsSlice.reducer;