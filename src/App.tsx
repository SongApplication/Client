import React from 'react';
import './App.css';
import SongsLandingPage from './pages/LandingPage/SongsLandingPage';
import AddSong from './pages/ADD/AddSong';
import { Route, Routes } from "react-router-dom";
import EditSong from './pages/EDIT/EditSong';
import WarpsComponent from './pages/WarpsComponent';


function App() {
  return (
    <div className="App">
        <WarpsComponent/>
    </div>
  );
}

export default App;
