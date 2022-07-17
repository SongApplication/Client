import React, { useEffect, useState } from "react";
import { SongModel } from "../../SongModel";
import SongCard from "../../component/SongCard/SongCard";
import { useNavigate } from "react-router-dom";
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
import { IconButton, InputAdornment, TextField } from '@mui/material';

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
     
    }

    const SearchByArtist = () => {
        console.log(artistName);

        try {
            props.showSongsByArtist(artistName);
        }
        catch (e) {
            console.log(e)
        }

    }

    return <>
        <h1>Welcome to Songs Project</h1>

        <TextField sx={{ color: "white" ,marginTop:8}} onChange={(val) => { setArtistName(val.target.value) }}
            label="Search By Artist"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="start" >
                        <IconButton sx={{ color: "white" }} onClick={SearchByArtist}> Searce
                            <SearchIcon sx={{ color: "white" }} />
                        </IconButton>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton color="primary" sx={{color: "white", p: '10px' }} aria-label="directions" onClick={GetAllSongs}>
                            <IoArrowBackCircle />
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />

        <IconButton onClick={() => { nav("/songs/addSong") }}>
            <IoMdAddCircleOutline size={50} />
        </IconButton>

        {
            props.songs.map((item: SongModel,index:number) => {
                console.log(item.id);
                console.log(index);
                return (
                    <SongCard song={item} del={props.deleteSongs} key={index} />
                )
            })
        }

    </>;
}

export default SongsLandingPage;