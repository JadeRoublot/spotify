import { createSlice } from '@reduxjs/toolkit';
import React, { useState } from 'react';


export interface Playlist {
    title: string
   // music : Music[]
   // color1 : string
   // color 2 : string
}

export interface Music {
    title: string
    artist: string
    genre: string
    year: number
    duration: number
    popularity: number
}

let setColorPlaylist = () => (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

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