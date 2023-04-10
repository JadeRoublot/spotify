import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import MainPage from './MainPage';
import PlaylistPage from './PlaylistPage';
import { Provider } from 'react-redux';
import store from './store';


const App = () => (
    <div className="app">
        <Navigation />
        <Provider store={store}>
            <Routes>
                <Route path="/MainPage" element={<MainPage />} />
                <Route path="/LikedSong" element={<PlaylistPage />} />
                <Route path="*" element={<Navigate to="/MainPage" />} />
            </Routes>
        </Provider>
    </div>
);

export default App;
