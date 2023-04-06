import { createSlice } from '@reduxjs/toolkit';
import React, { useState } from 'react';


export interface Playlist {
    title: string
   // music : Music[];
}

export interface Music {
    title: string
    artist: string
    genre: string
    year: number
    duration: number
    popularity: number
}



export const Add = createSlice({
    name: 'playlist',
    initialState: {
      
       
        
    },

    reducers: {

       
       }

    },
);

export const {} = Add.actions;

export default Add.reducer;