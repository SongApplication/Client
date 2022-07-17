import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { addSongActions, deleteSongActions, editSongActions, saveSongs } from "../redux/actions";
import { addSongThunk, deleteSongThunk, etidSongThunk, getSongsByArtistThunk, getSongsThunk } from "../redux/Thunks";
import { SongModel } from "../SongModel";
import AddSong from "./ADD/AddSong";
import EditSong from "./EDIT/EditSong";
import SongsLandingPage from "./LandingPage/SongsLandingPage";
import type { } from 'redux-thunk/extend-redux'
import { RootState } from "../redux/store";


export default function WarpsComponent() {
    let songsReducer: { songsArr: SongModel[] } = useSelector((state: RootState) => state.sng);

    const dispatch = useDispatch();

    const showAllSongs = (songArr: SongModel[]) => {
        dispatch(getSongsThunk(songArr));
    }
    const showSongsByArtist = (nameArtist:string) => {
        dispatch(getSongsByArtistThunk(nameArtist));
    }

    const addNewSongs = (newSong: SongModel) => {
        console.log(newSong.genre);
        dispatch(addSongThunk(newSong));
    }

    const editSongs = (songToEd: SongModel) => {
        dispatch(etidSongThunk(songToEd.id as string, songToEd));
    }
    const deleteSongs = (id: string) => {
        dispatch(deleteSongThunk(id));
    }

    return (
            <Routes>
                <Route path="/" element={<SongsLandingPage songs={songsReducer.songsArr} showAllSongs={showAllSongs} showSongsByArtist={showSongsByArtist} deleteSongs={deleteSongs} />} />
                <Route path="/songs/addSong" element={<AddSong addNewSongs={addNewSongs} />} />
                <Route path="/songs/editSong/:id" element={<EditSong songs={songsReducer.songsArr} editSongs={editSongs} />} />
            </Routes>
    )

}