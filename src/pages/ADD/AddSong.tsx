import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { typeGener } from "../../SongModel";
import BackButton from "../../component/BackButton";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { addSongActions } from "../../redux/actions";
import "./AddSong.css";
import axios from "axios";
import { NewspaperOutlined } from "@mui/icons-material";



const AddSong = (props: any) => {

    const [newSong, setNewSong] = useState({ title: " ", artist: " ", length: 0, price: 0, genre: " " })
    // const [gener, setGener] = useState('');

    // const handleChange = (event: SelectChangeEvent) => {
    //     setGener(event.target.value);
    //     console.log(gener);
    //     setNewSong({ ...newSong, gener: gener })
    //     console.log(newSong.gener);
    // }

    const addNewSong = async () => {

        try {
            console.log(newSong);
            props.addNewSongs(newSong);
        }
        catch (e) {
            console.log(e)
        }


        //  axios({url:"http://localhost:8080/songs/AddSongs", method:'POST',data:newSong})
        // .then(res => {

        //     props.add(newSong);
        // }
        // ).catch(err => {
        //     console.log(err)
        // });

    }


    return <>
        <div className="modal">
            <div className="modal__container">
                <div className="modal__featured">
                    <div className="modal__circle"></div>
                    <img src="https://cloud.githubusercontent.com/assets/3484527/19622568/9c972d44-987a-11e6-9dcc-93d496ef408f.png" className="modal__product" />
                </div>
                <div className="modal__content">
                    <h2>Add New Song</h2>

                    <form>
                        <ul className="form-list">

                            <li className="form-list__row">
                                <TextField id="standard-basic" label="title of song" variant="standard" onChange={(val) => { setNewSong({ ...newSong, title: val.target.value }) }} />
                            </li>
                            <li className="form-list__row">
                                <TextField id="standard-basic" label="artist of song" variant="standard" onChange={(val) => { setNewSong({ ...newSong, artist: val.target.value }) }} />
                            </li>
                            <li className="form-list__row">
                                <TextField id="standard-basic" label="length of song" type="number" variant="standard" onChange={(val) => { setNewSong({ ...newSong, length: parseFloat(val.target.value) }) }} />
                            </li>
                            <li className="form-list__row">
                                <TextField id="standard-basic" label="price of song" type="number" variant="standard" onChange={(val) => { setNewSong({ ...newSong, price: parseFloat(val.target.value) }) }} />
                            </li>

                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={newSong.genre}
                                    label="Genre"
                                    onChange={(val) => { setNewSong({ ...newSong, genre: val.target.value }) }}
                                >

                                    {typeGener.map((item, key) =>
                                        <MenuItem key={key} value={item}>{item}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>

                            <li>
                                <Stack spacing={2} direction="row">
                                    <Button variant="contained" onClick={addNewSong}>ADD</Button>
                                </Stack>
                            </li>

                        </ul>
                        <BackButton />
                    </form>
                </div>
            </div>
        </div>

    </>;


}

export default AddSong;