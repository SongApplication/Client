import React, { useEffect, useState } from "react";
import { SongModel } from "../../SongModel";
import SongCard from "../../component/SongCard/SongCard";
import { useNavigate } from "react-router-dom";
import { IconButton, TextField } from "@mui/material";
import { IoMdAddCircleOutline } from "react-icons/io"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "axios";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { IoArrowBackCircle } from "react-icons/io5";

const SongsLandingPage = (props: any) => {
    const nav = useNavigate();

    const [artistName, setArtistName] = useState(" ");


    useEffect(() => {
        axios.get("http://localhost:8080/songs/GetAllSongs").then(res => {
            console.log(res.data);
            props.showAllSongs(res.data);
        }
        ).catch(err => {
            console.log(err)
        });
    }, [])

    const GetAllSongs = () => {

        try {
            props.showAllSongs(props.Songs);
        }
        catch (e) {
            console.log(e)
        }
        // axios.get("http://localhost:8080/songs/GetAllSongs").then(res => {
        //     console.log(res.data);
        //     props.showAllSongs(res.data);
        // }
        // ).catch(err => {
        //     console.log(err)
        // });
    }

    const SearchByArtist = () => {
        console.log(artistName);

        try {
            props.showSongsByArtist(artistName);
        }
        catch (e) {
            console.log(e)
        }

        // console.log(artistName);
        // axios.get(`http://localhost:8080/songs/GetByArtist/${artistName}`)
        //     .then(res => {
        //         console.log(res.data);
        //         props.showAllSongs(res.data);
        //     }
        //     ).catch(err => {
        //         console.log(err)
        //     });
    }
    let count = 0;

    return <>
        <h1>Welcome to Songs Project</h1>

        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Songs By Artist"
                // inputProps={{ 'aria-label': 'Search Songs By Artist' }}
                onChange={(val) => { setArtistName(val.target.value) }}
            />
            <IconButton sx={{ p: '10px' }} aria-label="search" onClick={SearchByArtist} >
                <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={GetAllSongs}>
                <IoArrowBackCircle />
            </IconButton>
        </Paper>

        <IconButton onClick={() => { nav("/songs/addSong") }}>
            <IoMdAddCircleOutline size={50} />
        </IconButton>

        {
            props.songs.map((item: SongModel) => {
                console.log(item.id);
                console.log(count);
                return (
                    <SongCard  song={item} del={props.deleteSongs} key={count++} />
                )
            })
        }

    </>;
}

export default SongsLandingPage;