import { configureStore } from '@reduxjs/toolkit';
import playlistsReducer, { Playlist, PlaylistTop } from './Slices/playlistsSlice';

export interface State {
    spotify: {
        playlist: Playlist[],
        playlistTop : PlaylistTop[],
        displayModal: boolean,
        displayMenu : boolean,
    }
   
}

export default configureStore({
    reducer: {
        spotify: playlistsReducer,
    },
});
