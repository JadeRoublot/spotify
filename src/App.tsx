import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import MainPage from './MainPage';
import PlaylistPage from './PlaylistPage';


const App = () => (
    <div className="app">
        <Navigation />
        <Routes>
            <Route path="/MainPage" element={<MainPage />} />
            <Route path="/LikedSong" element={<PlaylistPage />} />
            <Route path="*" element={<Navigate to="/MainPage" />} />
        </Routes>
    </div>
);

export default App;
