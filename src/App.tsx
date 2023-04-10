import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import MainPage from './MainPage';
import PlaylistPage from './PlaylistPage';
import { Provider } from 'react-redux';
import store from './store';
import SpotifyFooter from './SpotifyFooter';
import { Footer } from 'antd/es/layout/layout';


const App = () => (
    <div className="app">
       
        <Provider store={store}>
        <Navigation />
            <Routes>
                <Route path="/MainPage" element={<MainPage />} />
                <Route path="/LikedSong" element={<PlaylistPage />} />
                <Route path="/Playlist/:id" element={<PlaylistPage />} />
                <Route path="/Top50/:id" element={<PlaylistPage />} />
                <Route path="*" element={<Navigate to="/MainPage" />} />
            </Routes>
            <Footer><SpotifyFooter/></Footer>
        </Provider>
       
    </div>
);

export default App;
