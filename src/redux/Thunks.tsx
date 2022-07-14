import axios from "axios";
import { SongModel } from "../SongModel";
import { addSongActions, deleteSongActions, editSongActions, saveSongs } from "./actions";


export const addSongThunk = (song: SongModel) => {
    return async (dispatch: any) => {
        console.log("Thunk"+song.genre);
        try {
            const res = await axios.post('http://localhost:8080/songs/AddSongs', song,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                });
            console.log("succes")
            dispatch(addSongActions(song));
        }
        
        catch (error) {
            console.log(error);
        }
    }
}

export const etidSongThunk = (id:string ,song: SongModel) => {
    return async (dispatch: any) => {
        try {
            const res = await axios.put('http://localhost:8080/songs/UpdateSongs', song,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                });
            console.log("succes")
            dispatch(editSongActions(id,song))
        }
        catch (error) {
            console.log(error);
        }
    }
}

export const getSongsThunk = (songs: SongModel[]) => {
    return async (dispatch: any) => {
        try {
            const res = await axios.get("http://localhost:8080/songs/GetAllSongs",
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                });
            console.log("succes")
            dispatch(saveSongs(res.data));
        }
        catch (error) {
            console.log(error);
        }
    }
}

export const getSongsByArtistThunk = (artistName:string) => {
    return async (dispatch: any) => {
        try {
            const res = await axios.get(`http://localhost:8080/songs/GetByArtist/${artistName}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                });
            console.log("succes")
            dispatch(saveSongs(res.data));
        }
        catch (error) {
            console.log(error);
        }
    }
}

export const deleteSongThunk = (idSong:string) => {
    return async (dispatch: any) => {
        try {
            const res = await axios.delete(`http://localhost:8080/songs/DeleteSong/${idSong}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                });
            console.log("succes")
            dispatch(deleteSongActions(idSong));
        }
        catch (error) {
            console.log(error);
        }
    }
}
