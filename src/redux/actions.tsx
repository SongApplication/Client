import React from "react";
import { SongModel } from "../SongModel";



export const saveSongs = (songArr: SongModel[]) => {
    return {
        type: "GET_SONGS",
        payload: songArr
    }
}

export const addSongActions = (newSong: SongModel) => {
console.log(newSong)
console.log("a"+ newSong.genre)

    return {
        type: "ADD_SONG",
        payload: newSong
    }
}

export const editSongActions = (id: String, song: SongModel) => {

    return {
        type: "EDIT_SONG",
        payload: { id: id, s: song }
    }
}

export const deleteSongActions = (idS: string) => {
    return {
        type: "DELETE_SONG",
        payload: idS
    }
}