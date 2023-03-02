import { createSlice } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import Data from '../static/data.json';

export interface Playlist {
    title: string;
    artist: string;
    genre: string;
    year : number;
    duration : number;
    popularity : number;
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