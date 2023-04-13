import { configureStore } from '@reduxjs/toolkit';
import playlistsReducer, { Music, MusicPlayed, Playlist, PlaylistTop } from './Slices/playlistsSlice';

export interface State {
    spotify: {
        playlist: Playlist[],
        playlistTop : PlaylistTop[],
        displayModal: boolean,
        displayMenu : boolean,
        musicPlayed : MusicPlayed,
        musicToAdd : Music[],
    }
   
}

export default configureStore({
    reducer: {
        spotify: playlistsReducer,
    },
});
