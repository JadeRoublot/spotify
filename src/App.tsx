import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import MainPage from './MainPage';


const App = () => (
    <div className="app">
        <Navigation />
        <Routes>
            <Route path="/MainPage" element={<MainPage />} />
            <Route path="*" element={<Navigate to="/MainPage" />} />
        </Routes>
    </div>
);

export default App;
