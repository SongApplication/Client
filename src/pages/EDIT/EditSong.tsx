import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { SongModel, typeGener } from "../../SongModel";
import BackButton from "../../component/BackButton";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import FormHelperText from '@mui/material/FormHelperText';



export default function EditSong(props: any) {

    const [songToEdit, setSongToEdit] = useState({ title: " ", artist: " ", length: 0, price: 0, genre: " " })
    let arr = props.songs;

    const { id } = useParams();

    useEffect(() => {
        let son: SongModel[];
        son = arr.filter((item: SongModel) => item.id == id);
        console.log(son[0]);
        setSongToEdit(son[0]);
        console.log(songToEdit);
    }, [])


    const [genre, setGener] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setGener(event.target.value as string);
        setSongToEdit({ ...songToEdit, genre: genre })
    };

    const editSong = async () => {

        try {
            props.editSongs(songToEdit);
        }
        catch (e) {
            console.log(e)
        }

        // await axios({ url: "http://localhost:8080/songs/UpdateSongs", method: 'PUT', data: songToEdit })
        //     .then(res => {
        //         props.editSongs(songToEdit);
        //     }
        //     ).catch(err => {
        //         console.log(err)
        //     });

    }

    return <>
        <div className="modal">
            <div className="modal__container">
                <div className="modal__featured">
                    <div className="modal__circle"></div>
                    <img src="https://cloud.githubusercontent.com/assets/3484527/19622568/9c972d44-987a-11e6-9dcc-93d496ef408f.png" className="modal__product" />
                </div>
                <div className="modal__content">
                    <h2>Edit a Song</h2>

                    <form>
                        <ul className="form-list">
                            <li className="form-list__row">
                                <TextField id="standard-basic" label="title of song" variant="standard" value={songToEdit.title} onChange={(val) => { setSongToEdit({ ...songToEdit, title: val.target.value }) }} /><br></br>
                            </li>
                            <li className="form-list__row">
                                <TextField id="standard-basic" label="artist of song" variant="standard" value={songToEdit.artist} onChange={(val) => { setSongToEdit({ ...songToEdit, artist: val.target.value }) }} /><br></br>
                            </li>
                            <li className="form-list__row">
                                <TextField id="standard-basic" label="length of song" type="number" variant="standard" value={songToEdit.length} onChange={(val) => { setSongToEdit({ ...songToEdit, length: parseFloat(val.target.value) }) }} /><br></br>
                            </li>
                            <li className="form-list__row">
                                <TextField id="standard-basic" label="price of song" type="number" variant="standard" value={songToEdit.price} onChange={(val) => { setSongToEdit({ ...songToEdit, price: parseFloat(val.target.value) }) }} />
                            </li>

                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={songToEdit.genre}
                                    defaultValue={songToEdit.genre}
                                    label="Genre"
                                    onChange={handleChange}
                                >

                                    {typeGener.map((item, key) =>
                                        <MenuItem key={key} value={item}>{item}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>

                            {/* <InputLabel id="demo-simple-select-label">Gener</InputLabel>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={genre} label="Gener" defaultValue={songToEdit.genre} onChange={handleChange} >
                                        {typeGener.map((item, key) =>
                                            <MenuItem key={key} value={item}>{item}</MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                            </Box> */}
                            <li>
                                <Stack spacing={2} direction="row">
                                    <Button variant="contained" onClick={editSong}>EDIT</Button>
                                </Stack>
                                {/* <button type="submit" className="button" onClick={addNewSong}>Add Song</button> */}
                            </li>
                        </ul>
                        <BackButton />
                    </form>
                </div>
            </div>
        </div>
    </>;
}

