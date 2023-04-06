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